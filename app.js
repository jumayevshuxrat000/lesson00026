document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("profession").value;
    const gender = document.getElementById("gender").value;
    const country = document.getElementById("country").value;
      const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `
      <p><strong>Ism:</strong> ${fname}</p>
      <p><strong>Familiya:</strong> ${lname}</p>
      <p><strong>Yosh:</strong> ${age}</p>
      <p><strong>Kasb:</strong> ${profession}</p>
      <p><strong>Jins:</strong> ${gender}</p>
      <p><strong>Mamlakat:</strong> ${country}</p>
      <hr>
    `;
  
    document.getElementById("userList").appendChild(userDiv);
    
    event.target.reset();
  });
  