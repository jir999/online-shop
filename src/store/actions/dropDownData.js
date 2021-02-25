export const fetchKitchenTypes = 'fetchKitchenTypes';

export const fetchedKitchenTypes = (data) => ({
    type: fetchKitchenTypes,
    fetchedData: data
});