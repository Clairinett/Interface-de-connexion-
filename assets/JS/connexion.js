let noclickconnexion = () => {
  const btnValider = document.getElementById("btnValider");
  const setemail = document.getElementById("setemail").value;
  const setpassword = document.getElementById("setpassword").value;

  btnValider.addEventListener("click", e=>{
    e.preventDefault();
  });

  fetch("https://afpatraining.snage.tech/login", {
  method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "x-api-key" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c",
      "Authorization" : "$tokenuser",
    },
    body: JSON.stringify({
      email : setemail,
      password: setpassword
    })
  })

  .then((response) => response.json())
  .then((userdata8) => {
  console.log("Success:", userdata8);
  })
  .catch((error) => {
  console.error("Error:", error);
  });
};

