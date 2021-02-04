[![This project uses GitHub Actions for continuous integration.](https://github.com/ember-learn/ember-survey/workflows/CI/badge.svg)](https://github.com/ember-learn/ember-survey/actions?query=workflow%3ACI)

# ember-survey

This is the survey.emberjs.com site. 

The intent of this repo is to have a permanent home for the annual community survey that is not restricted by the shortcomings of third-party solutions.

Roughly inspired by the ideas from Mel Sumner and Chris Manson (see https://github.com/MelSumner/tech-survey) 

## Design Intentions/Requirements

- it uses the ember-styleguide addon 
- it is fully accessible (meets AA standards)
- it demonstrates best practices for forms in Ember (and on the web at large)
- it allows us to track questions over time
- it has historical data from past surveys
- it allows for different questions to be asked each year (if necessary)
- it has a blueprint for the creation of individual questions
- individual questions are created in .md files (via blueprint generation)
- it allows users to traverse one question at a time (like typeform, but accessible)
- the results are easy to access and review from the front-end
- it contains scripts to normalize and analyze the results (including sentiment analysis)
- results from past years can be viewed individually
- multi-year results for the same question can be viewed at once
- it has questions that are worded clearly
- it has options that do not "lead the witness"
- it includes who to contact if you have any questions about the data
- it includes a privacy statement
- it includes a statement about how the information will be used
- raw data is not available on the front end or in the github repo
- (stretch) raw data is available behind a github-linked login for core team members

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-survey`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
