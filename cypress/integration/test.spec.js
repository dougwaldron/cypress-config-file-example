describe('Cypress is working', () => {
  it('always passes', () => {
    cy.log(Cypress.env('configFileTest'))
    expect(true).to.equal(true)
  })

  it('always fails', () => {
    expect(true).to.equal(false)
  })
})
