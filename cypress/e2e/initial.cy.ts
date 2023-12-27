describe('test spec', () => {
  it('loads initial page', () => {
    cy.visit('http://localhost:3000/', {failOnStatusCode: false})
    cy.get('img')
    cy.get('.gap-x-2 > a > .inline-flex')
    cy.get('.text-4xl > h1')
    cy.get('[data-testid="typewriter-wrapper"]')
    cy.get('.grid')
  })
})