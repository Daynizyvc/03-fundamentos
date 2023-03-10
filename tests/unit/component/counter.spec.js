import { shallowMount } from '@vue/test-utils'
import Counter from "@/components/Counter"

describe( 'Counter Component', ()=> {
    // test('Debe de hacer match con el snapshot', () => {
    //     const wrapper = shallowMount( Counter )
    //     expect( wrapper.html() ).toMatchSnapshot()
    // })
    let wrapper;
    beforeEach(() => { 
        wrapper = shallowMount( Counter )
     })
    test('H2 debe tener el valor por defecto', () => {
        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        expect( h2Value ).toBe('Counter')
    })

    test('el valor por defecto debe de ser 100 en el p', () => {
        const value =  wrapper.find('[data-testid="counter"]').text()
        // expect( pTags[1].text() ).toBe('100')
        expect( value ).toBe('100')
    })

    test('Debe de incrementar y decrementar el valor del contador', async () => {

        const [ increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value =  wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe('101')
    })

    // Leer props de pruebas
    test('Debe de establecer el valor por defecto', ()=> {
        const { start } = wrapper.props();
        // const start = wrapper.props('start');
        // console.log(start);
        const value =  wrapper.find('[data-testid="counter"]').text();

        expect( Number(value)).toBe(start) 

    })

    // Enviar props y evaluarlas
    test('Debe de mostar la prop title', () => {
        const title = 'Hola Mundo!!!!!'
        const wrapper = shallowMount( Counter, {
            props: { 
                title,
                start: 4
             }
        } );

        const { start } = wrapper.props();
        console.log(typeof start);

        expect( wrapper.find( 'h2' ).text() ).toBe( title )
    })
} )