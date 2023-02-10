describe('Smoke Test', () => {
    it('Make sure the welcome message comes up!', ()=>{
        cy.visit('http://localhost:3005')
        .contains("That's how we role");
    });
});