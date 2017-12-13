var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;
var noRecipes;
var navBarSelector ;

test.describe('add Recipe Page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('addRecipe');
        driver.get('http://localhost:3000/#/addrecipe');
        driver.wait(until.elementLocated(By.tagName('h1')), 20000);
        driver.findElements(By.tagName('tr'))
            .then( function( recipes ) {
                noRecipes = recipes.length;
            });
    } );

    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/addrecipe');
        driver.wait(until.elementLocated(pageSelector), 20000);
        navBarSelector = By.tagName('nav');
    } );

    test.it( 'shows the nav bar on Add recipe Page', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Add Recipe');
            });
        });
    } );

    test.it( 'accepts a new recipe and displays in list', function() {
        var input = driver.findElement(By.id('recipename'));
        input
            .then(function() {
                return driver.findElement(By.id('recipename'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('Cake');
            } )
        var input = driver.findElement(By.id('recipetype'));
        input
            .then(function() {
                return driver.findElement(By.id('recipetype'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('dessert');
            } )
        var input = driver.findElement(By.id('ingredients'));
        input
            .then(function() {
                return driver.findElement(By.id('ingredients'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('milk, eggs, flour');
            })
        var input = driver.findElement(By.id('rating'));
        input
            .then(function() {
                return driver.findElement(By.id('rating'));
            })
            .then(function(element) {
                element.clear();
                return element;
            } )
            .then(function(element) {
                element.sendKeys('7');
            })

            .then(function() {
                return driver.findElement(By.id('submit'));
            })
            .then(function(element) {
                element.submit();
            } )

            .then(function() {
                driver.wait(until.elementLocated(By.id('recipelist')),2000);
                return driver.findElements(By.tagName('tr'));
            })
            .then( function( recipes ) {
                expect(recipes.length).to.not.equal(noRecipes + 1) ;
                return recipes;
            })
    } );

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );

    test.after(function() {
        driver.quit();
    });
});