import React, { useEffect } from "react";

const cache = new Map();

const cachableFetch = () => {

}

const useFetch = (url) => {
    if (cache.has(fetchedData)) {
        return cache.get(fetchedData);
    }
}