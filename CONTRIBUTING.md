## Install dependencies

``` npm install```

## e2e test
All functional test are located in ```test/e2e/test``` folder. The e2e test framework is [Cypress](https://www.cypress.io/)
All test are written in Gherkin language and they run with Cucumber

Opening the test runner
```npm run e2e:open```

Execute all test
```npm run e2e:run```

### Test reports
Executing test under ```npm run e2e:open``` command, some JSON reports with the test result are created in ```test/reports/cucumber``` folder. To create an HTML report:

```npm run e2e:report``` 

In console will be printed the path were the ```index.html``` is created. Just open it to view the result.
