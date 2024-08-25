import React from 'react';
import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';


function App() {
const apiUrl = process.env.REACT_APP_API_URL

const fetchProducts = async () => {
        const response = await axios.get(apiUrl as string);
        return response?.data;
    };

  const articles = useQuery("articles", ()=>fetchProducts())

console.log(articles?.data)
  return (
    <div className="Apps">

       {
        articles?.data?.map((d: any)=> <div>{d?.title}</div>)
       }

    </div>
  );
}

export default App;
