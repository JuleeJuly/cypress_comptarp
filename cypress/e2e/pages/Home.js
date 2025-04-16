class Home{
    selectors = {
        sunInput: 'input[data-testid="input-soleil"]',
        sunButton: 'button[data-testid="button-soleil"]',
    };
    visit(){
        cy.visit('/accueil');
    }
    verifyUrl(){
        cy.url().should("include", "/accueil");
    }
    addSun(value){
        cy.get(this.selectors.sunInput).type(value);
        cy.get(this.selectors.sunButton).click();
    }
}
export default Home;