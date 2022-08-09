const getGifs = async (category) => {
	const limit = 10;
	const API_KEY = `MmaAePpUBjduMU9xrD1IhFKDAWhxDftD`;
	const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${limit}`;
	
	const response = await fetch(URL);
	// console.log(response);
	
	const {data} = await response.json();
	// console.log(data);
	
	const gifs = data.map(gif => ({
		id: gif.id,
		title: gif.title,
		url: gif.images.downsized_medium.url
	}));
	// console.log(gifs);
	return gifs;
};

export {getGifs};