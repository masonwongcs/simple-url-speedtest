const calculateSpeed = (url) => {
  return new Promise((resolve) => {
    const image = new Image();
    let startTime, endTime;
    startTime = Date.now();
    image.src = url + "/" + Math.random();
    image.onerror = function () {
      endTime = Date.now();
      const ping = endTime - startTime;
      resolve({
        url: url,
        ping,
      });
    };
  });
};

export default (urlArr, callback) => {
  if (callback) {
    Promise.all(urlArr.map(calculateSpeed)).then((data) => {
      callback(data);
    });
  } else {
    return Promise.all(urlArr.map(calculateSpeed));
  }
};
