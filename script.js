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
    articleContainer.classList.add("location-card");
    const locationNameTitle = document.createElement("h4");
    locationNameTitle.innerText = locationInfo.name;
    articleContainer.appendChild(locationNameTitle);
    locationSection.appendChild(articleContainer);
     
};

getDataFromApi();
