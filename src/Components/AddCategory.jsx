import {useState} from 'react';
import PropTypes from 'prop-types';

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
		<form onSubmit={handleSubmit} aria-label='form'>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired
};

export {AddCategory};