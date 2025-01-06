const imgData = {
  0: {
    url: "./imgs/0.jpeg",
  },
  1: {
    url: "./imgs/1.jpeg",
  },
  2: {
    url: "./imgs/2.jpeg",
  },
};

const appComponents = {
  imageSelect: document.querySelector("#imageSelector"),
}

Object.entries(imgData).forEach(([key, value]) => {
  const thisUrl = value.url;
  console.log(thisUrl)
});
