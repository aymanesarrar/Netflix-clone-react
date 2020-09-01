import React from 'react';
import './App.css';
import Row from './Components/Row';


function App() {
  return (
		<div className="App">
			<h1>Salam React</h1>
			<Row title="NETFLIX ORIGINALS" />
			<Row title="Trending now" />
		</div>
	);
}

export default App;
