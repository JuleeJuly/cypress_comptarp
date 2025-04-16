class Directory {
    selectors = {
        directoryTitle: 'h1',
        addContactButton: 'button[data-testid="button-add-contact"]',
        deleteContactButton: 'button[data-testid="button-delete-contact"]',
        addStructureButton: 'button[data-testid="button-add-structure"]',
        deleteStructureButton: 'button[data-testid="button-delete-structure"]',
        addFonctionButton: 'input[data-testid="button-add-fonction"]',
        deleteFonctionButton: 'input[data-testid="button-delete-fonction"]',
    };

  visit() {
    cy.visit('/annuaire');
  }
  verifyUrl() {
    cy.url().should("include", "/annuaire");
  }
  getDirectoryTitle() {
    cy.get(this.selectors.directoryTitle).should('contain', 'Annuaire');
  }
}