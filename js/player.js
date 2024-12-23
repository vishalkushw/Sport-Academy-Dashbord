
document.getElementById("btnsave").addEventListener("click", playersave);

async function playersave(){
    let pname=document.getElementById("pname").value;
    let age=document.getElementById("age").value;
    let psprt=document.getElementById("psprt").value;
    let year=document.getElementById("year").value;
    let month=document.getElementById("month").value;
    let price=document.getElementById("fees").value;


    let api="http://localhost:3000/player";

    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "playername":pname,
          "age":age,
          "psprt":psprt,
          "year":year,
          "month":month,
          "fees":price   
         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("Data save!!!");

}