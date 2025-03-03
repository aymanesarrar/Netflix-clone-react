const API_KEY = "1d72b7da05ee7907413f4645f56d28d4";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


export default requests;