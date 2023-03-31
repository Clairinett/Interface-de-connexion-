let noclickconnexion = () => {
  const btnValider = document.getElementById("btnValider");
  const setemail = document.getElementById("setemail").value;
  const setpassword = document.getElementById("setpassword").value;

  btnValider.addEventListener("click", e=>{
    e.preventDefault();
  });

  let verifInput = () => {
    if (setemail == "" || setpassword == ""){
      alert("Vous devez remplir tous les champs");
      // verifInput() = false;
    }

    // if (setemail != "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/") {
    //   alert("Votre address mail n'est pas correct. \nVoici un exemple d'address mail valide : exemple@mail.com");
    //   //setemail.style.border = "4px outset rgb(172, 43, 26)";
    // }
    
    // if (setemail != "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/") {
    //   alert("Votre address mail n'est pas correct. \nVoici un exemple d'address mail valide : exemple@mail.com");
    // }
      
    else {
      // verifInput() = true;
      window.location.href = "http://localhost:5500/views/profil.html";

    };

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
      email : setemail,
      password: setpassword
    })
  })

  .then((response) => {
    response.json();
    // if (verifInput() = true){
    //   window.location.href = "http://localhost:5500/views/profil.html";
    // }
  })
  .then((userdata8) => {
  console.log("Success:", userdata8);
  })
  .catch((error) => {
  console.error("Error:", error);
  });
};

