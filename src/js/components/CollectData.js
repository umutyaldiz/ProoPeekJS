import GetData from "./GetData";

const CollectData = async (api) => {
    if (api !== null) {
        const response = await GetData(api);
        return response;
    }
}

export default CollectData;