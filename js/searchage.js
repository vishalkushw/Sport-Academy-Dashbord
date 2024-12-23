document.getElementById("btn1").addEventListener("click", searchByAge);


async function  searchByAge()
{
    let Table=`<table border="1" width="90%"  height= "60%" bgcolor="skyblue">
               <tr bgcolor="orange">
                <th> Player name </th>
                <th> Age </th>
                <th> Sport </th>
                <th> Year </th>
                <th> Month </th>
                <th> Fees </th>
               </tr>  
                 `
    let txtval= document.getElementById("txt1").value;
    let api=`http://localhost:3000/player/?Age=${txtval}`;

    let Obj= await  fetch(api);
    let Data= await Obj.json();               
    console.log(Data);

    Data.map((key)=>{
        Table+=`<tr>
                  <td> ${key.playername} </td>
                  <td> ${key.age} </td>
                  <td> ${key.psprt} </td>
                  <td> ${key.year} </td>
                  <td> ${key.month} </td>
                  <td> ${key.fees} </td>
                 </tr>         
               `
    })

     Table+="</table>";

     document.getElementById("demo").innerHTML=Table;
}