const input = document.querySelector("input");
const addChapterButton = document.querySelector("button");
const unorderedList = document.querySelector("ul");
const errorField = document.querySelector(".error-field");

addChapterButton.addEventListener("click", onAddChapterClicked);

function onAddChapterClicked(event) {
    event.preventDefault();

    if (input.value.trim() != "") {
        errorField.textContent = "";
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.setAttribute("aria-label", "Delete");
        listItem.appendChild(deleteButton);
        unorderedList.appendChild(listItem);

        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
    }
    else {
        errorField.textContent = "Invalid Input";
    }

    input.value = "";
    input.focus();
}