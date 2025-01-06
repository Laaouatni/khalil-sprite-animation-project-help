const imgData = {
  nameImage: {
    url: "./imgs/0.jpeg",
  },
  anotherImage: {
    url: "./imgs/1.jpeg",
  },
  idkTheName: {
    url: "./imgs/2.jpeg",
  },
};

const appComponents = {
  imageSelect: document.querySelector("#imageSelector"),
  imageShow: document.querySelector("#imageShow"),
}

Object.entries(imgData).forEach(([key, value]) => {
  const thisUrl = value.url;
  console.log(thisUrl)
  const option = document.createElement("option");
  option.value = value.url;
  option.textContent = key;
  appComponents.imageSelect.appendChild(option);
});

const stylingStrings = {
  defineHeightWidth: "width:100px; height: 140px;",
};

// appComponents.imageShow.src = imgData.nameImage.url;
appComponents.imageShow?.setAttribute("style", `${stylingStrings.defineHeightWidth} background-image: url(${imgData.nameImage.url})`);

appComponents.imageSelect.addEventListener("change", (e) => {
  const selectedUrl = e.target.value;
  appComponents.imageShow?.setAttribute("style", `${stylingStrings.defineHeightWidth} background-image: url(${selectedUrl})`);
  // appComponents.imageShow.src = selectedUrl;
});

const SECOND = 1000;

for (let frameIndex = 0; frameIndex < 5; frameIndex++) {
  setTimeout(() => {
    console.log(frameIndex *100)
    appComponents.imageShow.setAttribute("style", `${stylingStrings.defineHeightWidth} background: url(${imgData.nameImage.url}) px 0px;`);
  }, frameIndex * SECOND);
}


