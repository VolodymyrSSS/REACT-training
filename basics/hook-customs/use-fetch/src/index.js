import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from './useFetch';

function App({ login }) {
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`);
  
  if (loading) return <h2>Loading...</h2>

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h2>{data.login}</h2>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App login="VolodymyrSSS"/>
  </React.StrictMode>
);
