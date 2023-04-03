const btnValider = document.getElementById("btnValider");
const setemail = document.getElementById("setemail");
const setpassword = document.getElementById("setpassword");

let regexMail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

btnValider.addEventListener("click", e=>{
  e.preventDefault();

  let verifInput = () => {
    if (setemail.value == "" || setpassword.value == ""){
      alert("Vous devez remplir tous les champs");
    }

    if (!regexMail.test (setemail.value) ) {
      alert("Votre address mail n'est pas correct. \nVoici un exemple d'address mail valide : exemple@mail.com");
    }
  };
  verifInput();

  fetch("https://afpatraining.snage.tech/login", {
  method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "x-api-key" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c",
      "Authorization" : "$tokenuser",
    },
    body: JSON.stringify({
      email : setemail.value,
      password: setpassword.value
    })
  })

  .then((response) => response.json())
  
  .then((response) => {
  console.log("Success:", response);
  window.location.href = "./profil.html"
  })
  .catch((error) => {
  console.error("Error:", error);
  });

});
