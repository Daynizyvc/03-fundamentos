describe('Example Component', () => {
  test( 'Deber de ser mayor a 10', () => {
    // Arreglar
    let value = 9;
    
    // Estímulo
    value = value + 2

    // Observar el resultado  
    expect( value ).toBeGreaterThan( 10 )
    
  } )
})