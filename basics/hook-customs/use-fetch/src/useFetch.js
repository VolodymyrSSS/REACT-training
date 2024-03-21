// This hook covers all these states:
// 1) if the data isn't available yet but is loading;
// 2) if we get the data
// 3) if there is an error

import { useState, useEffect } from 'react';

export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if(!uri) return;

    fetch(uri)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return { loading, data, error };
}