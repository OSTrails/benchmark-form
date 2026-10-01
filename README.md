# Benchmark Form

[![SQAaaS badge](https://github.com/EOSC-synergy/SQAaaS/raw/master/badges/badges_150x116/badge_software_silver.png)](https://api.eu.badgr.io/public/assertions/CxgEgRBRSsCVraA8pVruEw
"SQAaaS silver badge achieved")

This repository contains the source code for generating the contents of a
Google Sheets Benchmark Algorithm file used in conjunction with the
[FAIR Champion Quality Assessment tool](https://tools.ostrails.eu/champion/assess/algorithm).

The form has four components:

1. General metadata section
1. Tests and their individual output weights
1. Conditions/Calculations, based on references to the tests
1. Guidance, which is intended to be shown in case a test fails

## Prerequisites

Knowledge of HTML, and/or access to a drag and drop HTML editing tool.

## Using the form

1. Download the
   [generic_benchmark_algorithm_editor.html](/src/main/html/generic_benchmark_algorithm_editor.html)
   file
1. Open the file with a web browser
1. Optionally, use **Import CSV** to load an existing algorithm (a CSV exported
   from this form, or the Algorithm tab of a Google Sheet downloaded as CSV).
   This replaces the current form contents
1. Edit the general metadata as required
1. Add one or more [OSTrails tests](https://tests.ostrails.eu/tests/)
1. Add conditions that the tests results must meet
1. Add Guidance that can help the User work out what to do if a test fails
   (optional)
1. Validate the form
1. Export the contents (in either CSV or Excel format)
1. If exported in CSV format, import the generated CSV file into a Google
    Sheets file, otherwise upload the Excel file to Google Docs and open it
    with Google Sheets.
1. Generate a link with for the spreadsheet with permissions 'Anyone on the
    Internet can edit' (see File->Share->Share with others)
1. Open the
    [FAIR Champion Quality Assessment tool](https://tools.ostrails.eu/champion/assess/algorithms/new)
    and use the link in the Benchmark Configuration Spreadsheet URI field
    (spreadsheet must have been registered via
    [Register Benchmark Assessment Algorithm](https://tools.ostrails.eu/champion/algorithms/new))
1. Enter the URL of a digital object to evaluate in the GUID field
1. Press the Run Benchmark Quality Assessment button and wait for the results
    to be displayed

There is an example of a generated CSV file
(generic_benchmark_algorithm_2025-08-19.csv) in the example directory, which
can be loaded back into the form with **Import CSV**.

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

See [Semantic Versioning](https://semver.org/) for guidance.

## Contributors

You can find the list of contributors in the [CONTRIBUTORS](CONTRIBUTORS.md) file.

## License

See the [LICENSE](LICENSE.txt) file.

## CITING

See the [CITATION](CITATION.cff) file.
