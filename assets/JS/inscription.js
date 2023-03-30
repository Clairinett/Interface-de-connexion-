let noclickinscription = () => {
  // const btnAnnuler = document.getElementById('btnAnnuler');
  const btnValider = document.getElementById("btnValider");
  const setusername = document.getElementById("setusername").value;
  const setemail = document.getElementById("setemail").value;
  const setpassword = document.getElementById("setpassword").value;
  const confirmpassword = document.getElementById("confirm-password").value;


  btnValider.addEventListener("click", e=>{
    e.preventDefault();
  });

  
  let verifInput = () => {
    if (setusername == "" || setemail == "" || setpassword == ""){
      alert("Vous devez remplir tous les champs")
    }

    // if (setemail != "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/") {
    //   alert("Votre address mail n'est pas correct. \nVoici un exemple d'address mail valide : exemple@mail.com");
    //   //setemail.style.border = "4px outset rgb(172, 43, 26)";
    // }

    if (setpassword !== confirmpassword){
      alert("Votre mot de passe n'est pas = à la confirmation du mot de passe");
    }

  };
  verifInput();


  fetch("https://afpatraining.snage.tech/signup", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "x-api-key" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c",
      "Authorization" : "$tokenuser",
    },
    body: JSON.stringify({
      username: setusername,
      email: setemail,
      password: setpassword,
    }),
  })

  .then((response) => response.json())
  .then((userdata8) => {
  console.log("Success:", userdata8);
  })
  .catch((error) => {
  console.error("Error:", error);
  })
};





// {id 14,username: "setusername",email: "setemail",password: "setpassword", }

// { id 10 username : "utilisatrice8",email : "mail@mail.com",password : "passwort"

// { id 11, username: "util8",email: "monmail@gmail.com", //attention une lettre horrible, password: "rickroll",

// {//id 13, username: "jérémy",email: "a@a.a",password: "dazlidjazhdazdnczLDNHZAIUH",

// {id: 17, username: 'spyroLeDragon', email: 'spy@dragonmail.co'} mdp: vol

// {id: 18, username: 'claire', email: 'claire@mail.com'} mdp: id18

//{id: 19, username: 'julien', email: 'julien@mail.com'} mdp madeleine

// {id: 22, username: 'macdo', email: 'macdo@mail.com'} mdp cookie

// {id: 23, username: 'cookie', email: 'cookie@mail.com'} mdp 123