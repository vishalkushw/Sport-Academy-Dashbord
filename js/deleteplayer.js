function mydel(myid)
{
  let api=`http://localhost:3000/player/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}


async function Display()
{


 let Table=`<table width="90%" border="1" bgcolor="orage">
              <tr bgcolor="skyblue">
               <th> Player name </th>
                <th> Age </th>
                <th> Sport </th>
                <th> Year </th>
                <th> Month </th>
                <th> Fees </th>
                <th> Delete </th>
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
                  <a href="#" onclick="mydel('${key.id}')">

                    <img src="images/delet.jpg" width="30" height="30" >
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

Display();