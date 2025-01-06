const imgData = {
  nameImage: {
    url: "./imgs/0.jpeg",
    genericPositions: {
      x: [20, -89, -195, -304, -408, -513],
      y: [-109, 216, 323, 539, 649, 752, 856],
    },
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

const appComponents = {
  imageSelect: document.querySelector("#imageSelector"),
  imageShow: document.querySelector("#imageShow"),
};

Object.entries(imgData).forEach(([key, value]) => {
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

const initialOption = appComponents.imageSelect?.querySelector("option");

const arrayPositions = Object.values(
  imgData[initialOption?.textContent].positions,
).flat();

arrayPositions.forEach((position, index) => {
  setTimeout(() => {
    const [x, y] = position;
    appComponents.imageShow?.setAttribute(
      "style",
      `${stylingStrings.defineHeightWidth} background: url(${imgData.nameImage.url}) ${x}px ${y}px`,
    );
  }, index * (1000 / 2));
});

// appComponents.imageSelect.addEventListener("change", (e) => {
//   const selectedUrl = e.target.value;
//   appComponents.imageShow?.setAttribute(
//     "style",
//     `${stylingStrings.defineHeightWidth} background-image: url(${selectedUrl})`,
//   );

//   const thisUsedOption = e.target.querySelector(
//     `option[value='${selectedUrl}']`,
//   );
//   const arrayPositions = Object.values(
//     imgData[thisUsedOption.textContent].positions,
//   ).flat();

//   arrayPositions.forEach((position, index) => {
//     setTimeout(() => {
//       const [x, y] = position;
//       appComponents.imageShow?.setAttribute(
//         "style",
//         `${stylingStrings.defineHeightWidth} background-image: url(${selectedUrl}); background-position: ${x}px ${y}px`,
//       );
//     }, index * (1000 / 2));
//   });
// });
