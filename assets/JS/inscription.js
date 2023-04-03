const btnValider = document.getElementById("btnValider");
const setusername = document.getElementById("setusername");
const setemail = document.getElementById("setemail");
const setpassword = document.getElementById("setpassword");
const confirmpassword = document.getElementById("confirm-password");

let regexMail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

btnValider.addEventListener("click", e=>{
  e.preventDefault();

  let verifInput = () => {
    if (setusername.value == "" || setemail.value == "" || setpassword.value == ""){
      alert("Vous devez remplir tous les champs")
    }

    if (!regexMail.test (setemail.value) ) {
      alert("Votre address mail n'est pas correct. \nVoici un exemple d'address mail valide : exemple@mail.com");
    }

    if (setpassword.value !== confirmpassword.value){
      alert("Votre mot de passe n'est pas égale à la confirmation du mot de passe");
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
      username: setusername.value,
      email: setemail.value,
      password: setpassword.value,
    }),
    redirect: "follow",
  })

  .then((response) => response.json())
  
  .then((response) => {
  console.log("Success:", response);
  window.location.href = "views/profil.html"
  })
  .catch((error) => {
  console.error("Error:", error);
  });

});

  
  

// {id 14,username: "setusername",email: "setemail",password: "setpassword", }

// {id 10 username : "utilisatrice8",email : "mail@mail.com",password : "passwort"

// {id 11, username: "util8",email: "monmail@gmail.com",    //attention une lettre horrible, password: "rickroll",

// {id 13, username: "jérémy",email: "a@a.a",password: "dazlidjazhdazdnczLDNHZAIUH",

// {id: 17, username: 'spyroLeDragon', email: 'spy@dragonmail.co'} mdp: vol

// {id: 18, username: 'claire', email: 'claire@mail.com'} mdp: id18

// {id: 19, username: 'julien', email: 'julien@mail.com'} mdp madeleine

// {id: 22, username: 'macdo', email: 'macdo@mail.com'} mdp cookie

// {id: 23, username: 'cookie', email: 'cookie@mail.com'} mdp 123

// {id: 26, username: 'chocolat', email: 'chocolat@mail.com'} mdp chocapic963

// {id: 31, username: 'donut', email: 'donut@mail.com'} mdp levurechimique

// {id: 32, username: 'milka', email: 'milka@mail.com'} mdp suisse

// {id: , username: 'location', email: 'location@mail.com'} mdp 789

// hermione hermione@poudlard.fr wingardium

//nevil nevil@poudlard.fr oublietout 

// malfoy malfoy@poudlard.fr crachelimache