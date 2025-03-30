
let userform=document.getElementById("user-form")
const retrieve = () =>{
  let entries= localStorage.getItem("user-entries");
  if (entries) {
    try {
      entries = JSON.parse(entries);

      if (!Array.isArray(entries)) {
        entries = [];
      }
    } catch (error) {
   
      console.error("Error parsing JSON data from localStorage:", error);
      entries = [];
    }
  } else {
    entries = []; 
  }
  return entries;}
 
let userEntries=retrieve();
const display = () => {

  const entries =retrieve();
  const tableentries = entries.map( (entry) => {
    const namec= `<td class="border px-4 py-2">${entry.name}</td>`;
    const emailc= `<td class="border px-4 py-2">${entry.email}</td>`;
    const passwordc= `<td class="border px-4 py-2">${entry.password}</td>`;
    const dob= `<td class="border px-4 py-2">${entry.dob}</td>`;
    const acc= `<td class="border px-4 py-2">${entry.acc}</td>`;
    return `<tr>${namec}${emailc}${passwordc}${dob}${acc}</tr>`;
  }).join("\n");
  const table = `<table class="table-auto w-full"><tr>
  
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
   <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>
  
    ${tableentries}

  </table>`;
     
    let details=document.getElementById("user-entries");
    details.innerHTML=table;
    //return `<table>${tableentries}</table>`
}
const save= (event) => {

  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password= document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acc = document.getElementById("terms").checked;
  const entry={
    name: name,
    email: email,
    password: password,
    dob: dob,
    acc: acc
  };
  userEntries.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(userEntries))
  display();
 
}
userform.addEventListener("submit", save);
display();
localStorage.clear();
 


