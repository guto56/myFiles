
document.getElementById('btn').addEventListener('click', function(){
    input_numero = document.getElementById('numeroC').value
    nomeC = document.getElementById('nomeC').value
    dataC = document.getElementById('dataC').value
    cvvC = document.getElementById('cvvC').value

    card = {input_numero}

    for(i in card){
        print(i)
    }

    
})