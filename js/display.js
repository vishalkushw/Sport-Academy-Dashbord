
async function dataDisplay()
{
 let Table=`<table width="90%" height="70%" border="1" bgcolor="greenyellow">
              <tr bgcolor="green">
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
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();