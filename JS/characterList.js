const getCharacterListFromApi = async (URL_API) => {
    const pageNumberText = document.getElementById("numberPage")

    const response = await fetch(URL_API)
    if (response.ok){
        const caracterInformationFromApi = await response.json()
        console.log(caracterInformationFromApi.info.next)
        if (caracterInformationFromApi.info.next != null){
            buttonNextHtmlElement.href = caracterInformationFromApi.info.next
        }
        if (caracterInformationFromApi.info.prev != null){
            buttonPrevHtmlElement.href = caracterInformationFromApi.info.prev
        }
        const nummberPage = URL_API.split("page=")[1]
        if (nummberPage != undefined){

            pageNumberText.innerText = `Página ${nummberPage}`
        }
        caracterInformationFromApi.results.map((characterInformation, index)=>{
            createCharacterCardInHtml(characterInformation)
        })
    }
    else {
        alert("Problemas con la api")
   }
}

const createCharacterCardInHtml = (characterInformation) => {

    const characterSection = document.getElementById("root")

    const articleContainer = document.createElement("article")
    const imageElement = document.createElement("img")
    imageElement.src = characterInformation.image
    const containerForText = document.createElement("div")
    const NameCharacterTitle = document.createElement("h4")
    NameCharacterTitle.innerText = characterInformation.name
    const WorldForCharacter = document.createElement("p")
    WorldForCharacter.innerText = `Planeta: ${characterInformation.origin.name}`
    const CurrentWorld = document.createElement("p")
    CurrentWorld.innerText = `Localización: ${characterInformation.location.name}`

    containerForText.appendChild(NameCharacterTitle)
    containerForText.appendChild(WorldForCharacter)
    containerForText.appendChild(CurrentWorld)

    articleContainer.appendChild(imageElement)
    articleContainer.appendChild(containerForText)


    characterSection.appendChild(articleContainer)

}

getCharacterListFromApi("https://rickandmortyapi.com/api/character")

// Cuando le damos click al boton de siguiente tenemos que hacer una nueva llamada a la API
buttonNextHtmlElement.addEventListener("click", (event) => {
    // Evitamos que haga una redirección (comportamiento normal del elemento <a>)
    event.preventDefault();
    
    // Eliminamos el contenido que tenemos ahora (no nos interesa mantenerlos todos)
    const characterSection = document.getElementById("root");
    
    // Usamos forEach en lugar de map para recorrer y eliminar los elementos
    document.querySelectorAll(".character__section article").forEach((htmlElementArticle) => {
        characterSection.removeChild(htmlElementArticle);
    });

    getCharacterListFromApi(event.target.href)

});

buttonPrevHtmlElement.addEventListener("click", (event) => {
    // Evitamos que haga una redirección (comportamiento normal del elemento <a>)
    event.preventDefault();
    
    // Eliminamos el contenido que tenemos ahora (no nos interesa mantenerlos todos)
    const characterSection = document.getElementById("root");
    
    // Usamos forEach en lugar de map para recorrer y eliminar los elementos
    document.querySelectorAll(".character__section article").forEach((htmlElementArticle) => {
        characterSection.removeChild(htmlElementArticle);
    });

    getCharacterListFromApi(event.target.href)

});