const storageName = "reviewCount";
const reviewCountContainer = document.querySelector(".review-count");
let reviewCount = getReviewCount() + 1;

reviewCountContainer.textContent = reviewCount;
storeReviewCount();

function getReviewCount() {
    return JSON.parse(localStorage.getItem(storageName)) || 0;
}

function storeReviewCount() {
    localStorage.setItem(storageName, JSON.stringify(reviewCount));
}