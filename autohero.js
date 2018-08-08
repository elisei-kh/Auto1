describe('AutoHeroTest', function() {
    it("Gets, types and asserts", function() {
        cy.visit('https://www.autohero.com/de/search/');
        /*----click to open dropdown-----*/
        cy.contains('Erstzulassung').click()
        /*----click to open dropdown and select-----*/
            cy.get('[name="yearRange.min"]').select('2015')
        cy.wait(1000)
        /*----filter by price-----*/
        cy.get('[name="sort"]').select('Höchster Preis')
        cy.wait(1000)
        cy.get('[data-qa-selector="spec"]').should('greaterThan', '2014')
        cy.get('[data-qa-selector="price"]').should('decrease', '[data-qa-selector="price"]')



    })
})