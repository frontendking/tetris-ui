it('when visit {url} then see the 9900 pass page', ()=>{
  cy.visit('/purchase/purchaseSubscribe')
  cy.get('#purchaseSubscribe')
})
it('when visit {url} then see the #header-2800', ()=>{
  cy.get('#header-2800')
})