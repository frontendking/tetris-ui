context('purchase/subscribe', ()=>{
  beforeEach(()=>{
    cy.visit('/purchase/intro')
    cy.viewport(640, 1136)
  })
  describe('layout', ()=>{
    it('when visit {url} then see the 9900 pass page', ()=>{
      cy.get('#purchaseSubscribe')
    })
    it('when visit {url} then see the img named /.+header-2800$/', ()=>{
      cy.get('header > img.section').should('have.attr','src').and('match',/header-2800.png$/)
    })
    it('when visit {url} then see the header styled {backkground-img:/.+header-bg-2800$/', ()=>{
      cy.get('header').should('have.css', 'background-image').and('match', /header-bg-2800.jpg/)
    })
  })
})
