const url = 'https://rykerrswensen.github.io/wdd230/lesson9/directory.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);
    displayDirectory(data.directory);
}
const gridbutton = document.querySelector('#grid');
const listbutton= document.querySelector('#list');

const displayDirectory = (businessNames) => {
    const cards=document.querySelector('div.cards');

    var index=0;
    businessNames.forEach((business) => {
        let card = document.createElement ('section');
        let businessName = document.createElement('h1')
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let websiteUrl = ducment.createElement('a');
        let portrait = document.createElement('img');

        businessName.textContent = `${business.businessName}`;
        address.textContent = `Address: ${business.address}`;
        phoneNumber.innerHTML = `Phone number: ${business.phoneNumber}`;

        websiteUrl.href=business.websiteUrl;

        //Logo here
        portrait.setAttribute('src', business.Logo);
        portrait.setAttribute('alt', `Logo of ${business.businessName}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width', '140');
        portrait.setAttribute('height', '240');

        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(websiteUrl);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}

getDirectoryData();