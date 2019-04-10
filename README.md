# DIXONS Automation test

(http://tech.dixons.cz/automationtest)

# First steps:

- download node.js
- _npm install -g testcafe_
- clone project repository
- in project folder: _npm link testcafe_

# How to run tests:

- run in /tests folder as: testcafe browser _test-name.test.ts_ --skip-js-errors
- (e.g. testcafe chrome buying-a-product.test.ts --skip-js-errors)

Or use scripts from **_package.json_**:

- _npm run buying-a-product_
- _npm run wikipedia_
