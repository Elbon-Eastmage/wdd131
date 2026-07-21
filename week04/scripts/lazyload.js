const currentYearContainer = document.getElementById("currentYear");
const lastModifiedContainer = document.getElementById("lastModified");

currentYearContainer.innerHTML = new Date().getFullYear();
lastModifiedContainer.innerHTML = document.lastModified;