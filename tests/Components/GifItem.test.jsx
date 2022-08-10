import {render, screen} from '@testing-library/react';
import {GifItem} from '../../src/Components';

describe('Pruebas en <GifItem />', () => {
	const title = 'Saitama';
	const url = 'https://one-punch.com/saitama.jpg';
	test('Debe hacer match con el snapshot', () => {
		const {container} = render(
			<GifItem title={title} url={url} />
		);
		console.log(container);
		
		expect(container).toMatchSnapshot();
	});
	test('Debe de mostrar la imagen con el URL y ALT indicado', () => {
		render(<GifItem title={title} url={url} />);
		// expect(screen.getByRole('img').src).toBe(url);
		
		const {src, alt} = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});
	
	test('Debe mostrar el título en el component', () => {
		render(<GifItem title={title} url={url} />);
		expect(screen.getByText(title)).toBeTruthy();
	});
});