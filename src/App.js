import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './requests'
import Banner from './Components/Banner'


function App() {
  return (
		<div className="app">
			{/* Navbar */}
			<Banner />
			<Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
			<Row title="Trending now" fetchUrl={requests.fetchTrending}/>
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovie}/>
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie}/>
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie}/>
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie}/>
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
		</div>
	);
}

export default App;
