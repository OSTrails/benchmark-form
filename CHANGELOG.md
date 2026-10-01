# Changelog

All notable changes to Benchmark Form will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

*For each release, use the following sub-sections:*

- *Added (for new features)*
- *Changed (for changes in existing functionality)*
- *Deprecated (for soon-to-be removed features)*
- *Removed (for now removed features)*
- *Fixed (for any bug fixes)*
- *Security (in case of vulnerabilities)*

## [0.1.0] - UNRELEASED

### Added

- Import CSV button, which loads a previously exported CSV (or the Algorithm
  tab of a Google Sheet saved as CSV) into the form

### Changed

- Default guidance example now quotes its label, matching the format
  `[[URL,"label"],[URL,"label"]]`
- Weights may now be decimal numbers (previously truncated to integers)

### Deprecated

### Removed

### Fixed

- Values containing quotes (e.g. Guidance) were truncated, and values
  containing `<` or `&` were corrupted, when the form was pre-filled

### Security
