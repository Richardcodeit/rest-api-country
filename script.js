const dropdown =   document.querySelector(".dropdown")
const dropdowncontent = document.querySelector(".regions")
const regions = document.querySelectorAll(".region")
const Africa = document.querySelector(".Africa")
const Asia = document.querySelector(".Asia")
const Europe = document.querySelector(".Europe")
const Oceania = document.querySelector(".Oceania")
const America = document.querySelector(".America")
const input = document.getElementById("input")

dropdown.addEventListener("click" , showDropdownContent)

function showDropdownContent(){
    dropdowncontent.classList.add("active")
}

regions.forEach(element =>{
    element.addEventListener("click" , hideDropdownContent)
    function hideDropdownContent(){
    dropdowncontent.classList.remove("active")
    }
})
const ul = document.querySelector(".country-cards")
const url = "https://restcountries.com/v3.1/all"
const aray = ""
const fun = async ()=> {
    const resposose = await fetch(url)
     const data =  await resposose.json()
     console.log(data)
     const filetr = data.filter(dat => /Spain/.test(dat.name.common))
     console.log(filetr)
           data.forEach((element) => {
            
              const list = ` <div class="country-card">
      <div class="image">
        <img src="${element.flags.png}" alt="">
      </div>
      <div class="content">
        <p class="name">${element.name.common}</p>
        <p class="population">Population: ${element.population} </p>
        <p class="region">Region:  ${element.region}</p>
        <p class="capital">Capital:  ${element.capital}</p>
      </div>
   </div>`

              ul.insertAdjacentHTML("afterbegin" , list)
           })
  
}
fun()

const search = async ()=> {
const resposose = await fetch(url)
     const data =  await resposose.json()
     const filetr = data.filter(dat => /Spain/.test(dat.name.common))
     console.log(filetr)
     filetr.forEach((element) => {
              const list = ` <div class="country-card">
      <div class="image">
        <img src="${element.flags.png}" alt="">
      </div>
      <div class="content">
        <p class="name">${element.name.common}</p>
        <p class="population">Population: ${element.population} </p>
        <p class="region">Region:  ${element.region}</p>
        <p class="capital">Capital:  ${element.capital}</p>
      </div>
   </div>`

              ul.insertAdjacentHTML("afterbegin" , list)
           })

}

// const filterAsia = data.filter((dat)=>{
    // input.addEventListener("input" , fun)
//     return dat.region == "Asia"
// })



class SortRegions {
    constructor( api , region, Btn  ,ulEl){
        this.api = api
        this.Btn = Btn
        this.ulEl = ulEl
        this.region = region
    }
    async sortRegion(){
     
            const url = this.api
            const fet = await fetch(url)
            const data = await fet.json()
            const ulEl = this.ulEl
            const region = this.region
            const Btn = this.Btn
            const filter = data.filter(dat => dat.region == region)
            
            Btn.addEventListener("click" , (event)=>{
                ulEl.innerHTML = null
                const getValue = event.target.innerHTML
                filter.forEach((element)=>{
                const list = ` <div class="country-card">
      <div class="image">
        <img src="${element.flags.png}" alt="">
      </div>
      <div class="content">
        <p class="name">${element.name.common}</p>
        <p class="population"> Population: ${element.population} </p>
        <p class="region">Region:  ${element.region}</p>
        <p class="capital">Capital:  ${element.capital}</p>
      </div>
   </div>`
                switch(getValue){
                        case getValue:
                            ulEl.insertAdjacentHTML("afterbegin" , list)
                    }
                })
            })

    }

}
const africa = new SortRegions(url ,"Africa" , Africa , ul)
const asia = new SortRegions(url , "Asia" , Asia , ul)
const europe = new SortRegions(url , "Europe" , Europe , ul)
const oceania = new SortRegions(url , "Oceania" , Oceania , ul)
const america = new SortRegions(url , "Americas" , America , ul)
africa.sortRegion()
asia.sortRegion()
europe.sortRegion()
america.sortRegion()
oceania.sortRegion()



input.addEventListener("input", () => {
const searchValue = input.value.toLowerCase();
filterAndDisplayCountries(searchValue);
});

async function filterAndDisplayCountries(searchValue) {
const response = await fetch(url);
const data = await response.json();

const filteredData = data.filter(country => {
return country.name.common.toLowerCase().includes(searchValue);
});

ul.innerHTML = ""; // Clear previous country cards

filteredData.forEach(country => {
const list = `
<div class="country-card">
<div class="image">
  <img src="${country.flags.png}" alt="">
</div>
<div class="content">
  <p class="name">${country.name.common}</p>
  <p class="population">Population: ${country.population}</p>
  <p class="region">Region: ${country.region}</p>
  <p class="capital">Capital: ${country.capital}</p>
</div>
</div>
`;
ul.insertAdjacentHTML("afterbegin", list);
});
}
 

export * from './script.js';