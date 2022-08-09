import {useState} from 'react';
import {AddCategory, GifGrid} from './Components';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);
	const handleAddCategory = (newCategory) => {
		// Tarea
		// Agregar Algo
		if (categories.includes(newCategory)) return;
		// console.log(newCategory);
		setCategories([newCategory, ...categories]);
	};
	return (
		<>
			<h1>GifExpertApp</h1>
			
			<AddCategory
				onNewCategory={(event) => handleAddCategory(event)}
			/>
			
			{
				categories.map((category) => (
					<GifGrid
						key={category}
						category={category} />
				))
			}
		</>
	);
};

export {GifExpertApp};