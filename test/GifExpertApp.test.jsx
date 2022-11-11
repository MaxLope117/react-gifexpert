import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';

describe('Pruebas en el componente GifExpertApp.', () => {

    test('Hace match con el Snapshot.', () => {

        const { container } = render( <GifExpertApp /> );
        // screen.debug();
        expect( container ).toMatchSnapshot();
      
    });

    test('No agregar una categoría si ya existe.', () => {

        render( <GifExpertApp /> );
        // screen.debug();
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target : { value : 'One Punch Man' } } );
        fireEvent.submit( form );
        // screen.debug();
        expect( screen.getAllByRole('heading', { level : 3 }).length ).toBe(1);

    });

    test('Agregar una categoría si no existe.', () => {

        const inputValue = 'Halo';

        render( <GifExpertApp /> );
        // screen.debug();
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target : { value : inputValue } } );
        fireEvent.submit( form );
        // screen.debug();
        const contenido = [];
        screen.getAllByRole('heading', { level : 3 }).forEach( e => contenido.push(e.innerHTML) );
        // console.log(contenido);
        expect( screen.getAllByRole('heading', { level : 3 }).length ).toBeGreaterThan(1);
        expect( screen.getByText( 'Halo' ).innerHTML ).toBe(inputValue);
        expect( contenido ).toEqual(['Halo', 'One Punch Man']);

    });
  
});
