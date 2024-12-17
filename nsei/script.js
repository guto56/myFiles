document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const fileInput = document.getElementById('file-upload');
    const files = fileInput.files;

    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        }

        reader.readAsDataURL(file);
    }

    // Limpa o campo de upload após o envio
    fileInput.value = '';
});