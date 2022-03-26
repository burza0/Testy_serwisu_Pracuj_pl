

describe('Sprawdzenie ilośći ofert dla Praca IT', ()=> {
  
        
    it('Powinna zostać wyświetlona liczba ofert', () => {
        
        cy.viewport('macbook-11') // Set viewport to 375px x 667px
        cy.visit('https://pracuj.pl')
       
        cy.get('.slider--2SDzi > [data-test="autocomplete-input"] > [data-test="autocomplete-wp-input"] > [data-test="autocomplete-input-field"]').type('Warszawa')
        cy.get('.slider--3cgbH > :nth-child(1) > [data-test="radius"] > [data-test="radius-options"] > [data-test="radius-input"]').click({force: true})
        cy.get('.slider--3cgbH > :nth-child(1) > [data-test="radius"] > [data-test="radius-options"] > [data-test="radius-list"] > [value="100"] > [data-test="button-radius-select"]').click({force: true})
        cy.get('.slider--1Afpe').click({force: true})
        cy.get('.page > :nth-child(6)')
        cy.get('.results-header__offer-count-text').should('contain.text', "Mamy dla Ciebie")
     
    })
})