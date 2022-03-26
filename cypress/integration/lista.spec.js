

describe('', ()=> {

    it('', () => {
      
        cy.viewport('macbook-11') 
        cy.visit('https://pracuj.pl')
        cy.get('[data-test="section-desktopLayout"]').find('li').each(($el) => {
       
        const textElement = $el.find("a").text()
        cy.log(textElement)
         })

        cy.get('[data-test="section-desktopLayout"]').find('li').then(($eel) => {
        const lengthli = $eel.length
       
        cy.log(lengthli)

    })
      
       
    })

})
