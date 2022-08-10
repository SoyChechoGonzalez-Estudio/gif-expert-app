import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/Components';
import {useFetchGifs} from '../../src/Hooks/useFetchGifs';

jest.mock('../../src/Hooks/useFetchGifs');
describe('Pruebas en <GifGrid />', () => {
	const category = 'One Punch';
	test('Debe mostrar el Loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true
		});
		render(
			<GifGrid category={category} />
		);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
		// screen.debug();
	});
	test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'https://localhost/saitama.jpg'
			},
			{
				id: '123',
				title: 'Gokú',
				url: 'https://localhost/goku.jpg'
			}
		];
		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false
		});
		render(<GifGrid category={category} />);
		screen.debug();
	});
});