const {JSDOM}=require('jsdom'),fs=require('fs'),Papa=require('papaparse');
const S=JSON.parse(fs.readFileSync('sheet.json'));
const html=fs.readFileSync('../repo/src/main/html/generic_benchmark_algorithm_editor.html','utf8').replace(/<script src=[^>]*><\/script>/g,'');
const w=new JSDOM(html,{runScripts:'dangerously'}).window; w.Papa=Papa; w.alert=()=>{};
const n=w.importFromCSVText(fs.readFileSync('sheet_tab.csv','utf8'));
console.log('imported',n);
const rows=Papa.parse(w.exportToGoogleSheetFormat()).data;
const iT=rows.findIndex(r=>r[0]==='Test Reference'),iC=rows.findIndex(r=>r[0]==='Condition');
let d=0;const bad=m=>{d++;console.log('DIFF',m.slice(0,200))};
S.prop.forEach(([k,v],i)=>{if(rows[3+i][1]!==String(v))bad(`prop ${k} ${rows[3+i][1]} vs ${v}`)});
S.tests.forEach((t,i)=>{const r=rows[iT+1+i];if(r[0]!==t[0]||r[1]!==t[1].trim()||+r[2]!==+t[2]||+r[3]!==+t[3])bad('test '+t[0])});
S.conds.forEach((c,i)=>{const r=rows[iC+1+i];c.forEach((v,j)=>{if((r[j]??'')!==(v??''))bad(`cond ${c[0]} col${j}`)})});
// escaping probe
w.addItem('condition',{id:'X',description:'a & b </textarea><b>x "q"',formula:'T1>0',successMessage:'',failMessage:'',guidance:'[[u,"l"]]'});
const x=[...w.document.querySelectorAll('.condition-item')].pop();
console.log('escape ok:',x.querySelector('[name=conditionDescription]').value==='a & b </textarea><b>x "q"', x.querySelector('[name=guidance]').value==='[[u,"l"]]');
console.log('diffs',d); process.exit(0)
