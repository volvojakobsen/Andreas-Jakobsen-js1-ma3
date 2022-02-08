const key = "39999066c3344534906d49c321768c0e";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=39999066c3344534906d49c321768c0e";
//let results = document.querySelector(".results");
//let showResults = results.innerHTML; 


async function getAPI() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const final = jsonResponse.results;
    console.log(final)
    let results = document.querySelector(".results");
     

    for(let i = 0; i < final.length; i++) {
        if(i === 8){
            break;
        }
        results.innerHTML += `<div class="games">Game name: ${final[i].name}</div> <div class="games">Rating: ${final[i].rating}</div><div class="games end">Number of tags: ${final[i].tags.length}</div>`;
        
    }
}

getAPI()