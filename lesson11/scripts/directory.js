// Toggle active/not active buttons

var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// Load JSON data and do stuff
const url = "https://rykerswensen.github.io/wdd230/lesson11/data.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayBusinesses = (businesss) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  businesss.forEach((business) => {
    let card = document.createElement("section");
    card.innerHTML = `
      <img src="${business.logo}" alt="${business.name} logo">
      <p class='t1'>${business.name}</p>
      <p class='t2'>${business.type}</p>
      <p class='t3'>${business.location.address1}</p>
      <p class='t4'><a href="${business.website}">${business.website}</a></p>
    `;
    if (business.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); 
  
}; 

async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayBusinesses(data.businesses);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getBusinessData();
