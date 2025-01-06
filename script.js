const imgData = {
  nameImage: {
    url: "./imgs/0.jpeg",
    positions: {
      firstLine: [
        [20, 0],
        [-89, 0],
        [-195, 0],
        [-304, 0],
        [-408, 0],
        [-513, 0]
      ],
    },
  },
  anotherImage: {
    url: "./imgs/1.jpeg",
    positions: {
      0: [[0, 0]],
    },
  },
  idkTheName: {
    url: "./imgs/2.jpeg",
    positions: {
      0: [[0, 0]],
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
