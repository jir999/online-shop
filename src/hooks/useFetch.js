import { useState, useEffect } from 'react';

const cache = new Map();

export const cachableFetch = async (url) => {
    if (cache.has(url)) {
        return cache.get(url);
    }
    else {
        const response = await fetch(url);
        const data = await response.json();
        cache.set(url, data);
        return data;
    }
}

const useFetch = (url) => {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await cachableFetch(url);
            setFetchedData(result);
        })();
    }, []);
    return fetchedData;
};

export default useFetch;