class Login{
    selectors = {
        loginInput: 'input[data-testid="input-login"]',
        passwordInput: 'input[data-testid="input-password"]',
        conectButton: 'input[data-testid="button-connect"]',
    };
    visit(){
        cy.visit('/');
    }
    connect(login,password){
        this.fillLogin(login);
        this.fillPassword(password);
        this.clickConnectButton();
    }
    fillLogin(login){
        cy.get(this.selectors.loginInput).type(login);
    }
    fillPassword(password){
        cy.get(this.selectors.passwordInput).type(password);
    }
    clickConnectButton(){
        cy.get(this.selectors.conectButton).click();
    }
}
export default Login;