import IndecisionVue from "@/components/Indecision.vue";
import { shallowMount } from "@vue/test-utils";

describe('Indecision Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount( IndecisionVue )
    })

    test('Debe hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', () => {

    })

    
    test('escribir el símbolo "?" debe disparar el fetch', () => {

    })

    
    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en el API', () => {

    })
})