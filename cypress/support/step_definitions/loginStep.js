import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../../e2e/pages/Login.js";
import Home from "../../e2e/pages/Home.js";

const loginPage = new Login();
const homePage = new Home();

Given("I visit the login page", () => {
  loginPage.visit();
});

When("I enter valid credentials", () => {
    loginPage.connect("emylia", "Test1234");
});

Then("I should be redirected to the home page", () => {
    homePage.verifyUrl();
});