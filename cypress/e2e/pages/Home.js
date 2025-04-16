class Home{
    selectors = {
        sunInput: 'input[data-testid="input-soleil"]',
        sunButton: 'input[data-testid="button-soleil"]',
        sunTotal: 'label[data-testid="total-soleil"]',
        sunDelete: 'input[data-testid="supprimer-soleil"]',
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
    verifySunTotal(value){
        cy.get(this.selectors.sunTotal).should("contain", value);
    }
    deleteSun(){
        cy.get(this.selectors.sunDelete).click();
    }
}
export default Home;