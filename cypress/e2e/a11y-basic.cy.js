// cypress/e2e/a11y-basic.cy.js
describe('Todo app basic accessibility', () => {
it('has no obvious a11y violations on load', () => {
cy.visit('http://localhost:3000/todos');
// Inject axe-core into the page
cy.injectAxe();
// Run accessibility checks on the whole page
cy.checkA11y();
});
});