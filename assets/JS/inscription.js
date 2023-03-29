// const preventDefault = document.getElementsByClassName('preventDefault').addEventListener("click", function(event){
//   event.preventDefault();
// });

// const setusername = document.getElementById("setusername");
// const setemail = document.getElementById("setemail");
// const setpassword = document.getElementById("setpassword");

// const userdata8 = { 
//   username: setusername,
//   email: setemail,
//   password: setpassword,
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
const userdata8 = { 
  username: "jérémy",
  email: "a@a.a",
  password: "dazlidjazhdazdnczLDNHZAIUH",
};

fetch("https://afpatraining.snage.tech/signup", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
    "x-api-key" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c",
    "Authorization" : "$tokenuser",
  },
  body: JSON.stringify(userdata8),
})

.then((response) => response.json())
.then((userdata8) => {
console.log("Success:", userdata8);
})
.catch((error) => {
console.error("Error:", error);
});

