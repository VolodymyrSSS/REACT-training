import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from './useFetch';

function App({ login }) {
  const {loading, data, error} = useFetch(`https://jsonplaceholder.typicode.com/users`);
  
  if (loading) return <h2>Loading...</h2>

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div style={{width: '400px', margin: '3rem auto'}}>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h2>The list of USERMAMES</h2>
      <ul>
        <li>{JSON.stringify(data[0].username)}</li>
        <li>{JSON.stringify(data[1].username)}</li>
        <li>{JSON.stringify(data[2].username)}</li>
        <li>{JSON.stringify(data[3].username)}</li>
        <li>{JSON.stringify(data[4].username)}</li>
        <li>{JSON.stringify(data[5].username)}</li>
        <li>{JSON.stringify(data[6].username)}</li>
        <li>{JSON.stringify(data[7].username)}</li>
        <li>{JSON.stringify(data[8].username)}</li>
        <li>{JSON.stringify(data[9].username)}</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App login="VolodymyrSSS"/>
  </React.StrictMode>
);
