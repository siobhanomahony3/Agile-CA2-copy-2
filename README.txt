# Assignment 2 - Automated development process.

Name: Siobhan O Mahony

Student No.: 20058654

## Overview.

Agile-CA2: Webpack, Build Automatic, Continuous Integration. I began acceptance testing on this file and when I ran the test the whole page crashed and I could not get it back. I tried to rollback but I couldnt get it back. I have included this file as it is connected to my travis account. All code has been pushed to GitHub.

Agile-CA2 copy 2: Webpack and acceptance testing. All code has been pushed to GitHub.


## Environment.

Webstorm, Node, MongoDB

## Build automation.
mocha test/acceptance/
npm run build
npm run build: dev
npm test

https://github.com/siobhanomahony3/Agile-CA2-copy-2

## Acceptance Testing.

/Users/siobhanomahony/WebstormProjects/ssd4/Agile-CA2 copy 2/test/acceptance
siobhans-mbp-2:Agile-CA2 copy 2 siobhanomahony$ mocha test/acceptance/

  add Recipe Page
    ✓ shows the nav bar on Add recipe Page (47ms)
    ✓ shows the main header (50ms)
    ✓ accepts a new recipe and displays in list (7650ms)

  Home page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (56ms)

  Recipe List page
    ✓ shows the main header (38ms)
    ✓ displays the recipes (67ms)


  8 passing (18s)


## Continuous Integration.
https://travis-ci.org/siobhanomahony3/CA-Agile
Specify the URL of the Travis page for this app (e.g. https://travis-ci.org/joebloggs/donationsApp_with_travis) Explain any special steps a third party must perform to successfully execute CI on your project after cloning it.