let noclick = () => {
  // const btnAnnuler = document.getElementById('btnAnnuler');
  const btnValider = document.getElementById("btnValider");
  const setusername = document.getElementById("setusername").value;
  const setemail = document.getElementById("setemail").value;
  const setpassword = document.getElementById("setpassword").value;
  // const confirmpassword = document.getElementById("confirm-password").value;


  btnValider.addEventListener("click", e=>{
    e.preventDefault();
  });

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







// id 14
// const userdata8 = { 
//   username: "setusername",
//   email: "setemail",
//   password: "setpassword",
// };

//id 10
// const userdata8 = {    
//     username : "utilisatrice8",
//     email : "mail@mail.com",
//     password : "passwort"
// }

//id 11
// const userdata8 = { 
//   username: "util8",
//   email: "monmail@gmail.com", //attention une lettre horrible
//   password: "rickroll",
// };

//id 13
// const userdata8 = { 
//   username: "jérémy",
//   email: "a@a.a",
//   password: "dazlidjazhdazdnczLDNHZAIUH",
// };

// {id: 17, username: 'spyroLeDragon', email: 'spy@dragonmail.co'} mdp: vol

// {id: 18, username: 'claire', email: 'claire@mail.com'} mdp: id18


//{id: 19, username: 'julien', email: 'julien@mail.com'} mdp madeleine