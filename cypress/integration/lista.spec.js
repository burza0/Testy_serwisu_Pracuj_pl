
describe('Sprawdzenie ilośći ofert dla Praca IT', ()=> {
    it('Powinna zostać wyświetlona liczba ofert', () => {
        cy.visit('https://www.pracuj.pl/praca')
        cy.get('[data-test="button-accept-all-in-general"]').click()

    }
    
    
    )

})
