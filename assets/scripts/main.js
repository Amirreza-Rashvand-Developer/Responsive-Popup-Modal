let getModal = document.getElementById("show-modal")
let getModalData = document.getElementById("modal-data")
let closeModalBtn = document.getElementById("close-modal")
let getCover = document.getElementById("cover")

function showModal() {
    getModalData.style.top = "50%";
    getCover.style.opacity = 1;
}

function closeModal() {
    getModalData.style.top = "-100%";
    getCover.style.opacity = 0;
}