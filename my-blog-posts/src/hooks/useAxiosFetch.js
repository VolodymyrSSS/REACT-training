import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController(); // actually cansel the requst
		// const source = axios.CancelToken.source(); // cancelToken -> depricated

		const fetchData = async (url) => {
			setIsLoading(true);
			try {
				const response = axios.get(url, {
					// cancelToken: source.token, // if unmount component - cansel token
					signal: controller.signal,
				});
				if (isMounted) {
					setData(response.data);
					setFetchError(null);
				}
			} catch (err) {
				if (isMounted) {
					setFetchError(err.message);
					setData([]);
				}
			} finally {
				// could see loading message - but don't do it in prodaction
				// isMounted && setTimeout(() => setIsLoading(false), 2000);
				isMounted && setIsLoading(false);
			}
		};

		fetchData(dataUrl);

		const cleanUp = () => {
			isMounted = false;
			// source.cancel();
			controller.abort();
		};

		return cleanUp;
	}, [dataUrl]);

	return { data, fetchError, isLoading };
};

export default useAxiosFetch;
