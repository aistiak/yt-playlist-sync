import axios from 'axios';
export const listPlaylistItems = async (url, key, playlistId) => {
    try {
        const res = await axios({
            method: 'GET',
            url,
            headers: {
                Accept: 'application/json'
            },
            params: {
                key,
                part: 'snippet',
                playlistId,
            }
        });
        console.dir({ data: res.data }, { depth: null });
        console.log({
            t: res.data.items[0].snippet.resourceId.videoId
        });
    }
    catch (e) {
        console.log(e.response.data);
        console.log(`could not load playlist items`);
    }
};
