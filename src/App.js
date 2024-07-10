import './App.css';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import { useState } from "react";

function App() {
  const [weatherResponse, setweatherResponse] = useState([]);
  return (
    <div className="App">
      <div className="mainCard" >
        <SearchForm weatherResponse={weatherResponse} setweatherResponse={setweatherResponse} />
        {weatherResponse.length > 0 ? <SearchResult weatherResponse={weatherResponse} /> : null}
      </div>
    </div>
  );
}

export default App;
