const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c";

fetch("https://afpatraining.snage.tech/login", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey
  },
  body: JSON.stringify({
    username : "julien",
    email: "julien@mail.com",
    password: "madeleine",
  }),
})

.then((response) => response.json())
.then((userdata8) => {
console.log("Success:", userdata8);
})
.catch((error) => {
console.error("Error:", error);
});