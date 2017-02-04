import 'whatwg-fetch'

// handle user media capture
export function captureUserMedia(callback) {
  var params = {
    audio: true,
    video: true
  };

  navigator.getUserMedia(params, callback, (error) => {
    alert(JSON.stringify(error));
  });
};

export function S3Upload(fileInfo) { //parameters: { type, data, id }
  const postUrl = `http://129.31.231.107:9000/api/turtle_users/${fileInfo.currentUserId}/video/${fileInfo.matchUserId}`;
  const postData = new FormData();
  postData.append('myVideoFile', fileInfo.data);
  return new Promise((resolve, reject) => {
    fetch(postUrl, {
      method: 'POST',
      body: postData
    })
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    })
  })
}
