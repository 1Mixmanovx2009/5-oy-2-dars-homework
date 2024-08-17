let wrapper = document.querySelector(".List")
let searchInput = document.querySelector(".search-input")
let mode = document.querySelector(".mode")
let more = document.getElementById(".more")
let main = document.querySelector("main")
let select = document.querySelector(".select")

const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "./images/images(1).png"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "./images/images(2).png"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
]

function renderUsers(arr) { 
    wrapper.innerHTML = null 
    arr.map(item => { 
        let userItem = document.createElement("li") 
        userItem.className = " w-[300px] p-5 bg-var(--card_bg); rounded-lg bsh-[5px 5px 10px 10px]" 
        userItem.innerHTML = 
        `
        <img  class="flag" src="${item.flag}" alt="">
        <h2>Country: ${item.name}</h2>
        <p>Capital:${item.capital}</p>
        <p>Population: ${item.population}</p>
        <p>ID: ${item.id}</p>
        <div class="flex gap-[8px]">
             <a href="/">
                <img class="card_icon bg-white mt-[20px] p-[4px] rounded-[12px]" src="./images/heart-white (2).svg" alt="" width="35" height="10">
            </a>
            <a href="/">
                <img class="card_icon bg-white mt-[20px] p-[2px] rounded-[12px]" src="./images/save.svg" alt="" width="35" height="10">
            </a>
            <a href="/">
                <img class="more card_icon bg-white mt-[20px] p-[2px] rounded-[12px]" src="./images/more.svg" alt="" width="35" height="10">
            </a>
        </div>
        <div class="position-absolute  left-[0] top-[0] hidden">
            <h2>Country: ${item.name}</h2>
            <p>Capital:${item.capital}</p>
            <p>Population: ${item.population}</p>
            <p>ID: ${item.id}</p>
        </div>
        ` 
        wrapper.appendChild(userItem)
    })
}
renderUsers(countrys)

searchInput.addEventListener("keyup",function(evt){
    const searchValue = evt.target.value.toLowerCase()
    const filteredUsers = countrys.filter(item => item.name.toLowerCase().includes(searchValue))
    const filteredCapital = countrys.filter(item => item.capital.toLowerCase().includes(searchValue))
    
    renderUsers(filteredUsers)
    renderUsers(filteredCapital)

})


mode.addEventListener('click', () => {
    main.classListenner.add('.color_dark')
})



