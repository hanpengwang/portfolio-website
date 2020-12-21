import { openDB } from "idb";
export const videoFromDB = async () => {
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
    return "https://github.com/whpskg/files/blob/main/background-video-circle.mp4?raw=true";
  }

  var myURL = window.webkitURL || window.URL;

  const db = await openDB("videoDB", 1, {
    upgrade(db) {
      db.createObjectStore("videoStore");
    },
  });

  let blob = await db.get("videoStore", 0);
  if (blob) {
    return myURL.createObjectURL(blob);
  } else {
    let url =
      "https://cors-anywhere.herokuapp.com/https://github.com/whpskg/files/blob/main/background-video-circle.mp4?raw=true";

    let res = await fetch(url);
    if (res.status === 404) {
      throw new Error("unable to fetch video url");
    }
    let resBlob = await res.blob();
    await db.put("videoStore", resBlob, 0);
    let blob = await db.get("videoStore", 0);

    return myURL.createObjectURL(blob);
  }
};
