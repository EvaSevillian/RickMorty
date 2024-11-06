const getResidentDataFromApi = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

const showResidentsPopup = async (locationInfo) => {
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");

    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", () => {
        document.body.removeChild(popupContainer);
    });

    const popupTitle = document.createElement("h3");
    popupTitle.innerText = `Residents of ${locationInfo.name}`;
    popupContent.appendChild(popupTitle);
    popupContent.appendChild(closeButton);

    for (let residentUrl of locationInfo.residents) {
        const residentData = await getResidentDataFromApi(residentUrl);
        const residentElement = createResidentElement(residentData);
        popupContent.appendChild(residentElement);
    }

    popupContainer.appendChild(popupContent);
    document.body.appendChild(popupContainer);

    popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) {
            document.body.removeChild(popupContainer);
        }
    });
};

const createResidentElement = (residentData) => {
    const residentElement = document.createElement("div");
    residentElement.classList.add("resident-element");

    const residentImage = document.createElement("img");
    residentImage.src = residentData.image;
    residentImage.alt = residentData.name;

    const residentName = document.createElement("p");
    residentName.innerText = residentData.name;

    residentElement.appendChild(residentImage);
    residentElement.appendChild(residentName);
    return residentElement;
};
