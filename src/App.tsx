import React from 'react'
import { Router, Route } from "react-router-dom";
import Preview from "./pages/Preview"
import Landing from "./pages/Landing"
import Header from "./components/Header"
import history from "./history"
import './App.scss'

const App = () => {
	return (
		<div className="App">
			<Header/>
			<Router history={history}>
			<Route exact path="/" component={Landing} />
			<Route exact path="/v" component={Preview} />
			</Router>
		</div>
	  );
}
export default App