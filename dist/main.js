import { config } from 'dotenv';
config();
import { createRequire } from 'module';
export const require = createRequire(import.meta.url);
const { playlistId, key, url } = process.env;
import axios from 'axios';
export const uploadFile = async (key) => {
    try {
        const res1 = await axios({
            method: 'POST',
            url: `https://www.googleapis.com/drive/v3/files`,
            data: {
                key,
                name: 'poc-file',
            },
            params: {
                key
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log(res1.data);
    }
    catch (e) {
        console.log(e.response.data);
    }
};
async function main() {
    // const sampleVideoId = '4zAThXFOy2c'
    // await listPlaylistItems(url, key, playlistId)
    // await downloadAudio('hBvdIsBmQ6g')
    console.log(key);
}
main();
