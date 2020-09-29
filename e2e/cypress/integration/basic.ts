it('should perform basic google search', () => {
  cy.visit('http://localhost:3000/')
  cy.get('h1').should('have.text', 'Nuxt.ts 掲示板サンプル')
})
