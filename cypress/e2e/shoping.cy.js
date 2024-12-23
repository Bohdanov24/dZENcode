describe('Automated Shopping Cart Test', function() {
  it('Should add items to the cart and remove Carrot', function() {


    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

  
    cy.get('.search-keyword').type('ro')

   
    cy.get('.products')
      .contains('Carrot') 
      .parent() 
      .find('input') 
      .clear() 
      .type('5') 

     
       cy.contains('.products .product', 'Mushroom')
       .within(() => {
         for (let i = 0; i < 3; i++) {
           cy.get('.increment').click();
         }
       });

    
    cy.get('.products')
      .contains('Carrot') 
      .parent() 
      .find('button') 
      .click() 

    
    cy.get('.products')
      .contains('Mushroom') 
      .parent() 
      .find('button') 
      .click() 

   
    cy.get('.cart-icon').click() 

 
    cy.get('.cart-preview')
      .contains('li.cart-item','Carrot') 
      .find('.product-remove') 
      .click() 

   
    cy.get('.cart-preview').should('not.contain', 'Carrot') 
  })
})