const imgData = {
  nameImage: {
    url: "./imgs/0.jpeg",
    positions: {
      0: [0, 0]
    }
  },
  anotherImage: {
    url: "./imgs/1.jpeg",
    positions: {
      0: [0, 0]
    }
  },
  idkTheName: {
    url: "./imgs/2.jpeg",
    positions: {
      0: [0, 0]
    }
  },
};

const appComponents = {
  imageSelect: document.querySelector("#imageSelector"),
  imageShow: document.querySelector("#imageShow"),
};

Object.entries(imgData).forEach(([key, value]) => {
  const thisUrl = value.url;
  console.log(thisUrl);
  const option = document.createElement("option");
  option.value = value.url;
  option.textContent = key;
  appComponents.imageSelect.appendChild(option);
});

const imageSize = {
  width: 140,
  height: 140,
};

const stylingStrings = {
  defineHeightWidth: `width:${imageSize.width}px; height: ${imageSize.height}px;`,
};

appComponents.imageShow?.setAttribute(
  "style",
  `${stylingStrings.defineHeightWidth} background: url(${imgData.nameImage.url}) 0px 0px`,
);

appComponents.imageSelect.addEventListener("change", (e) => {
  const selectedUrl = e.target.value;
  appComponents.imageShow?.setAttribute(
    "style",
    `${stylingStrings.defineHeightWidth} background-image: url(${selectedUrl})`,
  );

  // const arrayPositions = imgData[e.target.textContent].positions;

  console.log(e.target.querySelector(`select[id='${e.target.value}']`));
});