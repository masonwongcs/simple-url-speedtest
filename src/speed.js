export default (urlArr, callback) => {
  let list = [];

  urlArr.forEach((item, index) => {
    const image = new Image();
    let startTime, endTime;
    startTime = Date.now();
    image.src = item + "/" + Math.random();
    image.onerror = function () {
      endTime = Date.now();
      const ping = endTime - startTime;
      list[index] = {
        url: item,
        ping,
      };
    };
  });

  const callbackInterval = setInterval(() => {
    const notEmptyList = list.filter((item) => item);
    if (notEmptyList.length === urlArr.length) {
      clearInterval(callbackInterval);
      callback(list);
    }
  }, 0);
};
