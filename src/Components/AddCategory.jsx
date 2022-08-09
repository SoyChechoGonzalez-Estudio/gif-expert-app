import {useState} from 'react';

const AddCategory = ({onNewCategory}) => {
	
	const [inputValue, setInputValue] = useState('');
	
	const handleInputChange = ({target}) => {
		setInputValue(target.value);
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(inputValue);
		const newInputValue = inputValue.trim();
		if (newInputValue.length <= 1) return;
		
		// setCategories((categories) => [inputValue, ...categories]);
		
		onNewCategory(newInputValue);
		setInputValue('');
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

export {AddCategory};