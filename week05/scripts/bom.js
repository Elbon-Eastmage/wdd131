const input = document.querySelector("input");
const addChapterButton = document.querySelector("button");
const unorderedList = document.querySelector("ul");
const errorField = document.querySelector(".error-field");
const storageName = "bookOfMormonChapters";

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => displayList(chapter));

addChapterButton.addEventListener("click", onAddChapterClicked);

function onAddChapterClicked(event) {
    event.preventDefault();

    if (input.value.trim() != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
        errorField.textContent = "";
    }
    else {
        errorField.textContent = "Invalid Input";
    }
}

function displayList(item) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    listItem.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("aria-label", "Delete");
    listItem.appendChild(deleteButton);
    unorderedList.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        deleteChapter(listItem.textContent);
        listItem.remove();
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem(storageName, JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem(storageName));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((currentChapter) => currentChapter != chapter);
    setChapterList();
}