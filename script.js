let headBtnEur = document.getElementById("headBtnEur");
let headBtnEng = document.getElementById("headBtnEng");
let headBtnMkd = document.getElementById("headBtnMkd");
let countryInput = document.getElementById("countryInput");
let searchBtn = document.getElementById("searchBtn");
let rstBtn = document.getElementById("rstBtn");
let results = document.getElementById("results");

async function call(){
    try{
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryInput.value}`);
        let data = await response.json();
        console.log(data);
        for(let i = 0; i < data.length; i++){
            results.innerHTML += `
        <div>
        <img src="${data[i].flags.png}" alt="">
        </div>`;
        }
    }
    catch(error){console.error(`Something is wrong with calling the function: ${error}`)}
    finally{
        let time = new Date();
        console.log(`The function is called at ${time}`)
    }
};

searchBtn.addEventListener('click', call);
rstBtn.addEventListener("click", () => {
    countryInput.value = "";
    results.innerHTML = "";
});