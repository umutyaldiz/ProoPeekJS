const GetData = async (url) => {
    const response = await fetch(url);
    return response.json();
}

export default GetData;