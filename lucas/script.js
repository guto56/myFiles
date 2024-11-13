const sendBtn = document.getElementById("sendBtn").addEventListener("click", function(){
    const reparoId = document.getElementById("codereparo").value


    if(reparoId === "5"){
        const id = document.getElementById("codereparo").value
        const section = document.getElementById("section");

        section.innerHTML = `
        <p>Número de Reparo: ${id}</p>
        `;

        document.body.append(section);


    }else{
        alert("Código errado");
    }
  
})