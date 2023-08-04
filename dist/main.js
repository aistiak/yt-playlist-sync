import { config } from 'dotenv';
config();
import { createRequire } from 'module';
export const require = createRequire(import.meta.url);
const { playlistId, key, url } = process.env;
async function main() {
    // const sampleVideoId = '4zAThXFOy2c'
    // await listPlaylistItems(url, key, playlistId)
    // await downloadAudio('hBvdIsBmQ6g')
    console.log(key);
}
main();
