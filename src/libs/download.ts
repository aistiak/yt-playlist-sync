import { createRequire } from "module";

export const require = createRequire(import.meta.url);
const fs = require('fs')
const ytdl = require('ytdl-core')


export const downloadAudio = async (videoId,title) => {
    try {
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const audioOutputPath = `dump/${title}.mp3`;

        const audioStream = ytdl(videoUrl, { filter: 'audioonly' });
        const fileStream = fs.createWriteStream(audioOutputPath);

        await new Promise((resolve, reject) => {
            audioStream.pipe(fileStream);
            fileStream.on('finish', resolve);
            fileStream.on('error', reject);
        });

        console.log('Audio downloaded successfully!');
    } catch (e) {
        console.log(e)
        console.log(`could not download audio`)
    }
}