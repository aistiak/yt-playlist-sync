import { config } from 'dotenv';
config();
import { downloadAudio } from './libs/download.js';
import { listPlaylistItems } from './libs/list.js';
// export const require = createRequire(import.meta.url);
// import { createRequire } from "module";
// export const require = createRequire(import.meta.url);
// const fs = require('fs')
// const ytdl = require('ytdl-core')
// export const downloadAudio = async (videoId,title) => {
//     try {
//         const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
//         const audioOutputPath = `dump/${title}.mp3`;
//         const audioStream = ytdl(videoUrl, { filter: 'audioonly' });
//         const fileStream = fs.createWriteStream(audioOutputPath);
//         await new Promise((resolve, reject) => {
//             audioStream.pipe(fileStream);
//             fileStream.on('finish', resolve);
//             fileStream.on('error', reject);
//         });
//         console.log('Audio downloaded successfully!');
//     } catch (e) {
//         console.log(e)
//         console.log(`could not download audio`)
//     }
// }
const { playlistId, key, url } = process.env;
console.log({
    playlistId,
    key,
    url
});
async function main() {
    const sampleVideoId = '4zAThXFOy2c';
    const list = await listPlaylistItems(url, key, playlistId);
    console.log(list);
    // console.log(list.length)
    for (const item of list) {
        console.log('downloading' + item.title);
        await downloadAudio(item.videoId, item.title);
    }
    console.log(key);
}
main();
