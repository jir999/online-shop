import React, { useState, useEffect } from "react";

const cache = new Map();
console.log("Cache",cache);

export const cachableFetch = async (url) => {
    if (cache.has(url)) {
        return cache.get(url);
    }
    else{
    console.log("fetch working");
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
    },[]);
    console.log("cache", cache)
    return fetchedData;
};

export default useFetch;