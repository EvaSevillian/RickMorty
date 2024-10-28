const getDataFromApi = async () => {

    const response = await fetch(url = "https://rickandmortyapi.com/api/location");
    console.log (response);
    const dataFromApi = await response.json();
    console.log(dataFromApi)
    console.log(dataFromApi.results)

    dataFromApi.results.forEach(location => {
        console.log("Location:", location); 
        createLocationCardInHtml(location);
    });
};

const createLocationCardInHtml = (locationInfo) => {
    const locationSection = document.getElementById("Text");
    const articleContainer = document.createElement("article");
    const buttonShowResidents = document.createElement("button");
    buttonShowResidents.id = locationInfo.name + "button";
    buttonShowResidents.classList.add("location-button");
    buttonShowResidents.innerText = "Show Residents";

    buttonShowResidents.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const planetButtonName = buttonId.split("button");
        console.log(planetButtonName[0]);
    });


    const locationNameTitle = document.createElement("h4");
    locationNameTitle.innerText = locationInfo.name;
    articleContainer.appendChild(locationNameTitle);
    articleContainer.appendChild(buttonShowResidents); 
    locationSection.appendChild(articleContainer);
};


function addBackgroundImage() {
    document.body.style.backgroundImage = "url('https://wallpapers.com/images/high/dope-rick-and-morty-mood-xf18w6xojcosnn64.webp')"; // Use a direct link to an image file
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
}








getDataFromApi();
