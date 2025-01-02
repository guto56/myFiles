const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('mouseover', function(){
    submitBtn.style.backgroundColor = 'rgba(4, 139, 4, 0.7';
    submitBtn.style.transition = 'transform 0.6s ease';
    submitBtn.style.transform = 'scale(1.06)';
})

submitBtn.addEventListener('mouseleave', function(){
    submitBtn.style.backgroundColor = 'rgba(4, 139, 4, 1)';
    submitBtn.style.transform = 'scale(1)';
})

const content = document.querySelector('.content');

content.addEventListener('mouseover', function(){
    content.style.transition = 'transform 0.8s ease';
    content.style.transform = 'scale(1.4)';

})

content.addEventListener('mouseleave', function(){
    content.style.transform = 'scale(1)';
})

const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("file");

dropArea.addEventListener("click", () => fileInput.click());

dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.backgroundColor = "transparent";
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = "transparent";
    const files = event.dataTransfer.files;
    fileInput.files = files;
});
