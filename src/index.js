import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import SearchMovies from "./searchMovies";

class Main extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="jumbotron bg-info text-white">
            <h1 className="display-2">Film Finder</h1>
            <p>A react app made using <strong>create-react-app</strong> and <strong>The Movie Databse API</strong></p>
            </div>
            <div className="container">
                <SearchMovies/>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));