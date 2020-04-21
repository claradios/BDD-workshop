# BDD-Workshop

### Amazing game to play mitical rock-paper-scissors and learn BDD

Just press the rock, paper or scissors image to select your choice. You could see the result in the screen message.

First to get five points wins!

If you want to restart the game, just press "New Game" button.

Enjoy and don't try to cheat the system (it is imposible :^|)

## Starting the app

### Install dependencies
```npm install```

### Start the server
```npm run app:serve```

By default, it starts the server in http://localhost:8080. If the port is busy, it will start in the next free port.

If you want to start the app in another port, launch the command
```npm run app:serve -- -p <PORT>```

### Access the app

Assuming the servers is started in port 8080, just navigate to http://localhost:8080/index


## e2e test
All functional test are located in ```test/cypress/integrations``` folder. The e2e test framework is [Cypress](https://www.cypress.io/)
All test are written in Gherkin language and they run with Cucumber

Opening the test runner
```npm run e2e:open```

Execute all test on terminal
```npm run e2e:run```

### Test reports
Executing test under ```npm run e2e:open``` command, some JSON reports with the test result are created in ```test/reports/cucumber``` folder. To create an HTML report:

```npm run e2e:report``` 

In console will be printed the path were the ```index.html``` is created. Just open it to view the result.
