let wrapper = document.querySelector(".List")
let searchInput = document.querySelector(".search-input")
let header = document.querySelector("header")
let modeNight = document.querySelector(".mode-night")
let modeLight = document.querySelector(".mode-light")
let more = document.getElementById(".more")
let main = document.querySelector("main")
let countSelect = document.querySelector(".count-select")

let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")
let modalContent = document.querySelector(".modal-content")

let heartSpan = document.querySelector(".heart__span")
let savedSpan = document.querySelector(".saved__span")

const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "./images/images(1).png",
        isLiked: false,
        isBasket: false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "./images/images(2).png",
        isLiked: false,
        isBasket: false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked: false,
        isBasket: false
    }
]

function renderUsers(arr) { 
    wrapper.innerHTML = null 
    arr.map(item => { 
        let userItem = document.createElement("li") 
        userItem.className = " w-[300px] p-5 bg-var(--card_bg); rounded-[12px] bsh-[5px 5px 10px 10px]" 
        userItem.innerHTML = 
        `
        <img  class="flag h-[190px] rounded-[12px] mb-[20px]" src="${item.flag}" alt="">
        <div class="title__wrapper">
                <h2>Country: ${item.name}</h2>
                <p>Capital:${item.capital}</p>
                <p>Population: ${item.population}</p>
                <p>ID: ${item.id}</p>
            <div class="flex gap-[8px]">
            <button>
                <img  onclick="hendleLikeBtnClick(${item.id})" class="${item.isLiked ? "mt-[20px] border-[2px] border-white p-[4px] bg-red rounded-[12px]" : " mt-[20px] border-[2px] border-white p-[4px] rounded-[12px]"}"  src="./images/heart-white (2).svg" alt="" width="35" height="10">
            </button>
            <button>
                <img onclick="hendleBasketBtnClick(${item.id})" class="${item.isBasket ? "mt-[20px] border-[2px] border-white p-[4px] bg-white rounded-[12px]" : " mt-[20px] border-[2px] border-white p-[4px] rounded-[12px]"}" src="./images/save.svg" alt="" width="35" height="10">
            </button>
            <button>
                <img onclick="handleMoreBtnClick(${item.id})" class="bg-white mt-[20px] p-[2px] rounded-[12px]" src="./images/more.svg" alt="" width="35" height="10">
            </button>   
            </div>
        </div>
        ` 
        wrapper.appendChild(userItem)
    })
    
    heartSpan.textContent = arr.filter(item => item.isLiked == true).length
    savedSpan.textContent = arr.filter(item => item.isBasket == true).length
}
renderUsers(countrys)


function handleMoreBtnClick(id) {
    modalWrapper.classList.remove("scale-0")
    
    const findeObj = countrys.find(item => item.id == id)
    modalContent.innerHTML = `
    <div class="w-[550px] flex item-center justify-around mt-[70px] py-[20px] m-auto border-[2px] bg-gray rounded-[12px]">
            <img  class="flag h-[190px] rounded-[12px] mb-[20px]" src="${findeObj.flag}" alt="">
            <div class="pt-[40px]">
                    <h2>Country: ${findeObj.name}</h2>
                <p>Capital:${findeObj.capital}</p>
                <p>Population: ${findeObj.population}</p>
                <p>ID: ${findeObj.id}</p>
            </div>
    </div>
    `
}

// Modal start
modalWrapper.addEventListener("click", function(e) {
    if (e.target.id == "wrapper") {
        modalWrapper.classList.add("scale-0")
    }
})

function closeBtnClick() {
    modalWrapper.classList.add("scale-0")
}
// Modal end

// Like Btn Click start
function hendleLikeBtnClick(id) {
    const findedObj = countrys.find(item => item.id == id)
    findedObj.isLiked = !findedObj.isLiked
    renderUsers(countrys)
    
}

function hendleBasketBtnClick(id) {
    const findedObj = countrys.find(item => item.id == id)
    findedObj.isBasket = !findedObj.isBasket
    renderUsers(countrys)   
}
// Like Btn Click end


searchInput.addEventListener("keyup",function(evt){
    const searchValue = evt.target.value.toLowerCase()
    const filteredUsers = countrys.filter(item => item.name.toLowerCase().includes(searchValue))
    
    renderUsers(filteredUsers)
})


modeNight.addEventListener('click', () => {
    main.classList.add('color_dark')
    header.classList.add('color_dark')
    modeNight.style.display = 'none'
    modeLight.style.display = 'block'
})

modeLight.addEventListener('click', () => {
    main.classList.remove('color_dark')
    header.classList.remove('color_dark')
    modeNight.style.display = 'block'
    modeLight.style.display = 'none'
})



countrys.forEach(item => {
    let option = document.createElement("option")
    option.value = item.capital
    option.textContent = item.capital
    countSelect.appendChild(option)
})

countSelect.addEventListener("change", (e) => {
    if (e.target.value == "all") {
        renderUsers(countrys)
    }

    else {
        filteredCapital = countrys.filter(item => item.capital == e.target.value)
        renderUsers(filteredCapital)
    }
})