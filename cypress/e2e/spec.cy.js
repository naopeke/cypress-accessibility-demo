/// <reference types="cypress" />

describe('Todo app', ()=>{
  beforeEach(()=>{
    cy.visit('https://todomvc.com/examples/react/dist/');
    cy.injectAxe();
  })

  it('log any accessibility failures', ()=>{
    cy.checkA11y();
  })

  it('exclude specific elements on the page', ()=>{
    cy.checkA11y({exclude: ['.learn']});
  })

  it('only test specific elements on the page', ()=>{
    cy.checkA11y('.learn');
  })

  it('should only include rules with serious and critical impacts', ()=>{
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious']})
  })
})
it('should exclude specific accessibility rules', ()=>{
  cy.checkA11y(null, { rules: {'color-contrast':{ enabled: false}}})
})