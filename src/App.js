import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [responseData, setResponseData] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response=>{setResponseData(response.data.results)})
    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
    return(
        <div>
          <button>Fetch</button>
          {
            responseData.map( (item, index) => 
                <p key={ index }>{ item.name }</p>
            )
          }
        </div>
    )
};
export default App;