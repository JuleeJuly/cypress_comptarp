import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Home from "../../e2e/pages/Home.js";
import Login from "../../e2e/pages/Login.js";

const homePage = new Home();
const loginPage = new Login();

Given("I visit the home page", () => {
    loginPage.visit();
    loginPage.connect("emylia", "Test1234");
    homePage.visit();
});