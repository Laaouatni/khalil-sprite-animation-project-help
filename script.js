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

appComponents.imageShow.src = imgData.nameImage.url;

appComponents.imageSelect.addEventListener("change", (e) => {
  const selectedUrl = e.target.value;
  appComponents.imageShow.src = selectedUrl;
});


