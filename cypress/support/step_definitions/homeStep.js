import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import Home from "../../e2e/pages/Home.js";
import Login from "../../e2e/pages/Login.js";

const homePage = new Home();
const loginPage = new Login();

Given("I am on the home page", () => {
    loginPage.visit();
    loginPage.connect("emylia", "Test1234");
    homePage.visit();
});
When("I add a sun", (value) => {
    homePage.verifySunTotal("0");
    homePage.addSun("Banque");
});
Then("I should see the sun", (value) => {
    homePage.verifySunTotal("1");
    homePage.deleteSun();
    homePage.verifySunTotal("0");
});