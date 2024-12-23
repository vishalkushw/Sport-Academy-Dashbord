document.getElementById("pname").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let pname=document.getElementById("pname").value;
 let Table=`<table width="90%" border="1"  bgcolor="skyblue">
              <tr bgcolor="orange">
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
     let str=key.playername;
     let myval=str.includes(pname);
     
             
     if (myval==true)
     {
       Table+=` <tr>
                   <td> ${key.playername} </td>
                  <td> ${key.age} </td>
                  <td> ${key.psprt} </td>
                  <td> ${key.year} </td>
                  <td> ${key.month} </td>
                  <td> ${key.fees} </td>
                </tr>  
            `
     }       
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}