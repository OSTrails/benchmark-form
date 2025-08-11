# Benchmark Form

[![SQAaaS badge](https://github.com/EOSC-synergy/SQAaaS/raw/master/badges/badges_150x116/badge_software_silver.png)](https://api.eu.badgr.io/public/assertions/CxgEgRBRSsCVraA8pVruEw "SQAaaS silver badge achieved")

This repository contains the source code for generating the contents of a Google Sheets Benchmark Algorithm file
used in conjunction with the [FAIR Champion Quality Assessment tool](https://tools.ostrails.eu/champion/assess/algorithm).

The form has three components:

1. General metadata section
2. Tests and their individual output weights
3. Conditions/Calculations, based on references to the tests

## Prerequisites

Knowledge of HTML, and/or access to a drag and drop HTML editing tool.

## Using the form

1. Download the generic_benchmark_algorithm_editor.html file
2. Open the file with a web browser
3. Edit the general metadata as required
4. Add one or more [OSTrails tests](https://tests.ostrails.eu/tests/)
5. Add conditions that the tests results must meet
6. Validate the form
7. Export the contents (in either CSV or Excel format)
8. If exported in CSV format, import the generated CSV file into a Google Sheets file,
otherwise upload the Excel file to Google Docs and open it with Google Sheets.
9. Generate a link with for the spreadsheet with permissions 'Anyone on the Internet can edit' (see File->Share->Share with others)
10. Open the [FAIR Champion Quality Assessment tool](https://tools.ostrails.eu/champion/assess/algorithm) and use the link
in the Benchmark Configuration Spreadsheet URI field
11. Enter the URL of a digital object to evaluate in the GUID field
12. Press the Run Benchmark Quality Assessment button and wait for the results to be displayed

There is an example of a completed form (CDC Benchmark Algorithm Editor.html)
and a generated CSV file (cdc_benchmark_algorithm_2025-08-07.csv) in the example directory.

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

See [Semantic Versioning](https://semver.org/) for guidance.

## Contributors

You can find the list of contributors in the [CONTRIBUTORS](CONTRIBUTORS.md) file.

## License

See the [LICENSE](LICENSE.txt) file.

## CITING

See the [CITATION](CITATION.cff) file.
