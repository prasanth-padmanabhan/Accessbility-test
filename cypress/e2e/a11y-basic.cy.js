// cypress/e2e/a11y-basic.cy.js
describe('accessibility testing', () => {
    beforeEach(()=>{
        cy.visit('/');
        cy.injectAxe();
    })
    it('Should detect accessibility violations', () => {
        // check accessibility violations
        cy.checkA11y();

    })
});