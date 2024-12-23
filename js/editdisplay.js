

async function editDisplay(myid)
{
  let api=`http://localhost:3000/player/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Edit Name: <input type="text" value="${Data.playername}">
          <br>
           Edit Age : <input type="text" value="${Data.age}">
          <br>
           Edit Sport : <input type="text" value="${Data.psprt}">
          <br>
           Edit year: <input type="text" value="${Data.year}">
          <br>
           Edit Month: <input type="text" value="${Data.month}">
          <br>
           Edit Fees: <input type="text" value="${Data.fees}">
          <br>
          <button> Edit Save! </button>
  `
  document.getElementById("demo1").innerHTML=myForm;
}




async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="purple">
                <th> Player name </th>
                <th> Age </th>
                <th> Sport </th>
                <th> Year </th>
                <th> Month </th>
                <th> Fees </th>
               </tr> 
           `

  let api="http://localhost:3000/player";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=` <tr>
                 <td> ${key.playername} </td>
                  <td> ${key.age} </td>
                  <td> ${key.psprt} </td>
                  <td> ${key.year} </td>
                  <td> ${key.month} </td>
                  <td> ${key.fees} </td>
                   <td> 
                   
                   <a href="#" onclick="editDisplay(${key.id})">
                     <img src="images/edit.png" width="30" height="30" >
                   </a>
                   </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();


async function editSave(id){

  let pname= document.getElementById("pname").value ;
  let age=document.getElementById("age").value ;
  let psprt=document.getElementById("psprt").value ;
  let year=document.getElementById("year").value ;
  let month=document.getElementById("month").value ;
  let price=document.getElementById("fees").value ;

  let api=`http://localhost:3000/player/${id}`;

  fetch(api, {
    method: "PATCH",
    headers: {
        "Content-Type" : "application/json"
      },
    body: JSON.stringify(
      {
        playername: pname,
        age:age,
        psprt:psprt,
        year: year,
        month: month,
        fees: price,

      }
    )
  })
  .then(json => {
    alert("Data updated!!!");
  });
}

async function editDisplay(myid)
{
  let api=`http://localhost:3000/player/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Edit Name: <input type="text" id="pname" value="${Data.playername}">
          <br>
           Edit Age : <input type="text" id="age" value="${Data.age}">
          <br>
           Edit Sport : <input type="text" id="psprt" value="${Data.psprt}">
          <br>
           Edit year: <input type="text" id="year" value="${Data.year}">
          <br>
           Edit month: <input type="text" id="month" value="${Data.month}">
          <br>
           Edit Fees: <input type="text" id="fees" value="${Data.fees}">
          <br>
          <button onclick="editSave(${Data.id})" id="btn"> Edit Save </button>
  `
  document.getElementById("demo1").innerHTML=myForm;
}




async function dataDisplay()
{
 let Table=`<table width="90%" height="70" border="1" bgcolor="skyblue">
             <tr bgcolor="green">
               <th> Player name </th>
                <th> Age </th>
                <th> Sport </th>
                <th> Year </th>
                <th> Month </th>
                <th> Fees </th>
                <th> Adit  </th>
              
                
               </tr> 
           `

  let api="http://localhost:3000/player";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
       Table+=` <tr>
                <td > ${key.playername} </td>
                  <td> ${key.age} </td>
                  <td> ${key.psprt} </td>
                  <td> ${key.year} </td>
                  <td> ${key.month} </td>
                  <td> ${key.fees} </td>
                  <td> 
                   
                   <a href="#" onclick="editDisplay(${key.id})">
                     <img src="images/add.png" width="30" height="30" >
                   </a>
                   </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();