import {useFetchGifs} from '../../src/Hooks/useFetchGifs';
import {renderHook, waitFor} from '@testing-library/react';

describe('Pruebas en el Hook useFetchGifs', () => {
	test('Debe de regresar al estado inicial', () => {
		const {result} = renderHook(() => useFetchGifs('One Punch'));
		const {images, isLoading} = result.current;
		// console.log(result);
		
		expect(images.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});
	test('Debe de retornar un arreglo de imágenes y isLoading en false', async () => {
		const {result} = renderHook(() => useFetchGifs('One Punch'));
		// console.log(result);
		await waitFor(
			() => expect(result.current.images.length).toBeGreaterThan(0)
		);
		
		const {images, isLoading} = result.current;
		
		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
	
});