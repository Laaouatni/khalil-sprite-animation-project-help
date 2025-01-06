const genericPositions = {
  x: [20, -89, -195, -304, -408, -513, -620, -720, -820, -920, -1030],
  y: [0, -109, -216, -323, -539, -649, -752, -856, -964],
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
  changeAndLoopOnImage,
};

appLogic.generateSelector();
appLogic.changeAndLoopOnImage(appComponents.imageSelect);

appComponents.imageSelect.addEventListener("change", (e) => {
  appLogic.changeAndLoopOnImage(e.target);
});

function changeAndLoopOnImage(selectElement) {
  appLogic.changeImage(appLogic.getSelectorValue(selectElement));
  appLogic.loopOverImage(getSelectorOptionName(selectElement));
}

function getSelectorOptionName(selectElement) {
  return selectElement.options[selectElement.selectedIndex].textContent;
}

function loopOverImage(imageName) {
  const previousImage = appLogic.getSelectorValue(appComponents.imageSelect);
  const thisObjData = imgData[imageName];
  const framesForEachLine = thisObjData.numberItems.x;
  framesForEachLine.forEach((numberElementsForThisLine, y) => {
    for (let x = 0; x < numberElementsForThisLine; x++) {
      setTimeout(() => {
        appLogic.gotoFrame(x, y);

        const isLastX = x === numberElementsForThisLine - 1;
        const isLastY = y === framesForEachLine.length - 1;
        const hasChangedImage = !(previousImage === appLogic.getSelectorValue(appComponents.imageSelect));
        if ((isLastX && isLastY) && !hasChangedImage) {
          setTimeout(() => {
            appLogic.loopOverImage(imageName);
          }, getDelayMs());
        }
      }, (x * getDelayMs()) + (y * getDelayMs()));
    }
  });
}

function getDelayMs() {
  return document.querySelector("#slider").value;
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