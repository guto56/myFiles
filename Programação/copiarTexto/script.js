document.getElementById('copyBtn').addEventListener('click', function(){
    const text = document.getElementById('texto');
    text.select();

    document.execCommand('copy')
})