describe('', ()=> {

    it('', () => {
      
        cy.viewport('macbook-11') 
        cy.visit('https://pracuj.pl/praca')
        cy.get('title').should('contain.text', 'Oferty pracy – Pracuj.pl')
          
        cy.get('[data-test="category-filter-button"] > .ripple').click()
        cy.wait(1000)
        
        
        
    })

})