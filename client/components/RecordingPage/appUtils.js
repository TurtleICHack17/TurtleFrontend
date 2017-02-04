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
  console.log("posted");
  return new Promise((resolve, reject) => {
    fetch('/video', {
      method: 'POST',
      body: new FormData(fileInfo.data)
    })
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    })
  })
}
