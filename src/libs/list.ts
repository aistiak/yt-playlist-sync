import axios from "axios";
export const listPlaylistItems = async (url, key, playlistId) => {
  try {
    let list = [];
    let pageToken = null;
    while (1) {
      const res = await axios({
        method: "GET",
        url: "https://www.googleapis.com/youtube/v3/playlistItems",
        headers: {
          Accept: "application/json",
        },
        params: {
          key,
          part: "snippet",
          playlistId,
          pageToken,
          // maxResults: 50,
        },
      });
      //   console.log(res.data.nextPageToken);
      pageToken = res.data.nextPageToken;
      console.log({ item: res.data.items[0] });
      console.log({
        title: res.data.items[0].snippet.title,
        videoId: res.data.items[0].snippet.resourceId.videoId,
      });
      //   console.log(res.data.items.length)
      const items = res.data.items.map((v,idx) => {
        const title = res.data.items[idx].snippet.title;
        const videoId = res.data.items[idx].snippet.resourceId.videoId;
        return {
            title ,
            videoId
        };
      });
      list = [...list,...items];
      console.log({list})
      break;
      if (!pageToken) break;
    }

    // console.dir({ data: res.data }, { depth: null })
    // console.log({
    //     t: res.data.items[0].snippet.resourceId.videoId
    // })
    return list;
  } catch (e) {
    console.log(e)
    console.log(e.response?.data);
    console.log(`could not load playlist items`);
    return []
  }
};
