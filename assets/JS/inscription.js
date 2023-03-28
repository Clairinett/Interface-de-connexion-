// const url = 'https://afpatraining.snage.tech/signup';
// const forminscription = document.getElementById('forminscription');
// const sendinscritpion = document.getElementById('sendinscription');


// async function inscription(){
//     const requete = await fetch(url, {
//         method: "POST",
//         headers: {
//             "x-api-key" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c",
//             // "Content-Type" : "multipart/form-data"
//             "Content-Type" : "application/json",
//             "authorization" : "$tokenuser"
//         },
//         // body: new URLSearchParams ({
//         // }),
//         body: {
//             username : "util8",
//             mail : "monmail@mail.com",
//             password : "rickroll",
//         },
//     });

//     if(requete.ok) {
//         alert("Un problème est survenu");
//     }
//     else {
//         const donnees = await requete.json();
//         console.log(donnees);
//     }
// }

// inscription();

const userdata8 = { 
    username: "util8",
    email: "monmail@gmail.com",
    password: "rickroll",
};

// const userdata8 = {
//     username : "utilisatrice8",
//     email : "mail@mail.com",
//     password : "passwort"
// }

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

