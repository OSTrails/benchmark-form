const {JSDOM}=require('jsdom'),fs=require('fs');
const html=fs.readFileSync('../repo/src/main/html/generic_benchmark_algorithm_editor.html','utf8').replace(/<script src=[^>]*><\/script>/g,'');
const w=new JSDOM(html,{runScripts:'dangerously'}).window; w.alert=()=>{};
w.document.dispatchEvent(new w.Event('DOMContentLoaded'));
const G='[[https://fairsharing.org/6274,"FAIR Principles F1-GUID"]]';
w.addItem('condition',{id:'X1',description:'a & b </textarea><b>x',formula:'T1 > 0',successMessage:'ok',failMessage:'no',guidance:G});
const c=[...w.document.querySelectorAll('.condition-item')].pop();
console.log('prepopulated guidance value:',c.querySelector('[name=guidance]').value);
console.log('description:',c.querySelector('[name=conditionDescription]').value);
c.querySelector('[name=guidance]').value=G;
const csv=w.exportToGoogleSheetFormat(); console.log('typed guidance exported:',csv.includes(G.replace(/"/g,'""')));
// weights
w.document.querySelector('[name=passWeight]').value='2.5';
console.log('2.5 exported as:',w.exportToGoogleSheetFormat().split('\n').find(l=>l.startsWith('"T1"')));
// xlsx numeric typing check via papa default
const Papa=require('papaparse'); console.log('Papa types:',typeof Papa.parse('5,-1').data[0][0]);
process.exit(0)
