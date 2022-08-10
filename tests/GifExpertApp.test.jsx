import {GifExpertApp} from '../src/GifExpertApp';
import {fireEvent, render, screen} from '@testing-library/react';

describe('Pruebas en <GifExpertApp />', () => {
	const newCategory = 'Saitama';

//Primero Debe agregar categorias nuevas:
	test('should Add new categories', () => {
		render(<GifExpertApp />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		
		//ahora disparo los eventos para agregar 3 categorias nuevas
		fireEvent.input(input, {target: {value: newCategory}});
		fireEvent.submit(form); //agrega Saitama
		
		fireEvent.input(input, {target: {value: newCategory + '2'}});
		fireEvent.submit(form); //agrega Saitama2
		
		fireEvent.input(input, {target: {value: newCategory + '3'}});
		fireEvent.submit(form);//agrega Saitama3

//Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
		expect(screen.getAllByRole('heading', {level: 3}).length).toBe(3);
	});

//No debe agregar una categoría si ya existe
	test('Should not add a repeated category', () => {
		
		render(<GifExpertApp />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');
		
		//disparo los eventos para agregar una categoría
		fireEvent.input(input, {target: {value: newCategory}});
		fireEvent.submit(form);//agrega Saitama
		
		//Intento agregar la misma categoria
		fireEvent.input(input, {target: {value: newCategory}});
		fireEvent.submit(form); //intento agregar Saitama nuevamente
		
		//espero que no agregue la misma categoría y sólo esté agregada la primera vez
		expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
	});
});