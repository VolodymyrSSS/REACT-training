import React, {useContext} from 'react';
import { TreesContext } from './index';

function App() {
  const { trees } = useContext(TreesContext);

  return(
    <div>
      <h1 style={{textAlign:"center"}}>The sample of useContext hook</h1>
      <div className="container">
        <h3>The trees I've recalled of, are:</h3>
        <ul>
          {trees.map(tree => (
            <li key={tree.id}>{tree.type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
