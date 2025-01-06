const genericPositions = {
  x: [20, -89, -195, -304, -408, -513, -620, -720, -820, -920, -1030],
  y: [-109, 216, 323, 539, 649, 752, 856, 964],
};

const imgData = {
  nameImage: {
    url: "./imgs/0.jpeg",
    numberItems: {
      x: [6, 8, 8, 12, 5, 3, 4, 4, 2],
    },
  },
  anotherImage: {
    url: "./imgs/1.jpeg",
    numberItems: {
      x: [6, 8, 8, 12, 6, 4, 3, 2, 2],
    },
  },
  idkTheName: {
    url: "./imgs/2.jpeg",
    numberItems: {
      x: [6, 8, 8, 10, 4, 3, 4, 2, 3],
    },
  },
};

const imageSize = {
  width: 140,
  height: 140,
};

const appComponents = {
  imageSelect: document.querySelector("#imageSelector"),
  imageShow: document.querySelector("#imageShow"),
};

const appLogic = {
  generateSelector
}

appLogic.generateSelector();

function generateSelector() {
  Object.entries(imgData).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = value.url;
    option.textContent = key;
    appComponents.imageSelect.appendChild(option);
  });
};

function gotoFrame(x, y) {
  appComponents.imageShow.style.backgroundPosition = `${x}px ${y}px`;
}

// const stylingStrings = {
//   defineHeightWidth: `width:${imageSize.width}px; height: ${imageSize.height}px;`,
// };

// appComponents.imageShow?.setAttribute(
//   "style",
//   `${stylingStrings.defineHeightWidth} background: url(${imgData.nameImage.url}) 0px 0px`,
// );

// const initialOption = appComponents.imageSelect?.querySelector("option");

// const arrayPositions = Object.values(
//   imgData[initialOption?.textContent].positions,
// ).flat();

// arrayPositions.forEach((position, index) => {
//   setTimeout(() => {
//     const [x, y] = position;
//     appComponents.imageShow?.setAttribute(
//       "style",
//       `${stylingStrings.defineHeightWidth} background: url(${imgData.nameImage.url}) ${x}px ${y}px`,
//     );
//   }, index * (1000 / 2));
// });