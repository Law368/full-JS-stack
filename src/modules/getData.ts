export const getData = async (url: any) => {
    const data = await fetch(url);
    const json = await data.json();
    return json;
};
