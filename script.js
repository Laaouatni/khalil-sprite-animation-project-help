const genericPositions = {
  x: [20, -89, -195, -304, -408, -513, -620, -720, -820, -920, -1030],
  y: [0, -109, -216, -323, -539, -649, -752, -856],
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

const appComponents = {
  imageSelect: document.querySelector("#imageSelector"),
  imageShow: document.querySelector("#imageShow"),
};

const appLogic = {
  generateSelector,
  getSelectorValue,
  changeImage,
  gotoFrame,
  loopOverImage,
};

appLogic.generateSelector();

appLogic.changeImage(appLogic.getSelectorValue(appComponents.imageSelect));
appLogic.loopOverImage(getSelectorOptionName(appComponents.imageSelect));

appComponents.imageSelect.addEventListener("change", (e) => {
  appLogic.changeImage(appLogic.getSelectorValue(e.target));
  appLogic.loopOverImage(getSelectorOptionName(e.target));
});

function getSelectorOptionName(selectElement) {
  return selectElement.options[selectElement.selectedIndex].textContent;
}

function loopOverImage(imageName) {
  const thisObjData = imgData[imageName];
  const framesForEachLine = thisObjData.numberItems.x;
  framesForEachLine.forEach((numberElementsForThisLine, y) => {
    for (let x = 0; x < numberElementsForThisLine; x++) {
      setTimeout(() => {
        appLogic.gotoFrame(x, y);
      }, x * (1000 / 2) + y * 1000);
    }
  });
}

function generateSelector() {
  Object.entries(imgData).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = value.url;
    option.textContent = key;
    appComponents.imageSelect.appendChild(option);
  });
}

function getSelectorValue(selectElement) {
  return selectElement.value;
}

function changeImage(url) {
  appComponents.imageShow.style.backgroundImage = `url(${url})`;
}

function gotoFrame(thisX, thisY) {
  appComponents.imageShow.style.backgroundPosition = `${genericPositions.x[thisX]}px ${genericPositions.y[thisY]}px`;
}