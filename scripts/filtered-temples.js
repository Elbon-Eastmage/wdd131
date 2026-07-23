const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple08.jpg"
    },
    {
        templeName: "Cedar City Utah",
        location: "Cedar City, Utah, United States",
        dedicated: "2017, December, 10",
        area: 42657,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
    }
];

const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const h1 = document.querySelector("h1");

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", toggleHamburgerMenu);

const home = document.querySelector("#home");
home.addEventListener("click", onHomeClicked);

const old = document.querySelector("#old");
old.addEventListener("click", onOldClicked);

const recent = document.querySelector("#new");
recent.addEventListener("click", onRecentClicked);

const large = document.querySelector("#large");
large.addEventListener("click", onLargeClicked);

const small = document.querySelector("#small");
small.addEventListener("click", onSmallClicked);

makeTempleCards(temples);

function toggleHamburgerMenu() {
    logo.classList.toggle("invisible");
    nav.classList.toggle("shown");
    hamburger.classList.toggle("active");
}

function onHomeClicked() {
    h1.textContent = "Home";
    makeTempleCards(temples);
}

function onOldClicked() {
    h1.textContent = "Old Temples";
    const oldTemples = temples.filter((temple) => getDedicationYear(temple) < 1900);
    makeTempleCards(oldTemples);
}

function onRecentClicked() {
    h1.textContent = "New Temples";
    const recentTemples = temples.filter((temple) => getDedicationYear(temple) > 2000);
    makeTempleCards(recentTemples);
}

function onLargeClicked() {
    h1.textContent = "Large Temples";
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    makeTempleCards(largeTemples);
}

function onSmallClicked() {
    h1.textContent = "Small Temples";
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    makeTempleCards(smallTemples);
}

function makeTempleCards(temples) {
    const album = document.querySelector(".album");
    album.innerHTML = "";

    if (logo.classList.contains("invisible")) {
        toggleHamburgerMenu();
    }

    for (const temple of temples) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML =
            `<h2>${temple.templeName}</h2>
            <p>
                Location: ${temple.location}<br>
                Dedicated: ${temple.dedicated}<br>
                Size: ${temple.area} square feet
            </p>
            <img src="${temple.imageUrl}" loading="lazy" alt="${temple.templeName} Temple">`;

        album.appendChild(card);
    }
}

function getDedicationYear(temple) {
    return parseInt(temple.dedicated.slice(0, temple.dedicated.indexOf(",")));
}