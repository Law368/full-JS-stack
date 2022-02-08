async function fetchData(url: string) {
    try {
        const getData = await fetch(url);
        const data = await getData.json();
        return data;
    } catch (err) {
        console.log('There was an error while fetching Data', err);
        throw new Error(err);
    }
}

export default fetchData;
