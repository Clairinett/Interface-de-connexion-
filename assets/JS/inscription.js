const url = 'https://afpatraining.snage.tech/signup';
const forminscription = document.getElementById('forminscription');
const sendinscritpion = document.getElementById('sendinscription');


async function inscription(){
    const requete = await fetch(url, {
        method: "POST",
        headers: {
            "x-api-key" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk0Nzg3MzksImV4cCI6MTY3OTQ3ODc5OX0.mM-RoWVPr81UCXcJ_IkOb_uNzIJRNpCHqaznoFPXV9c",
            // "Content-Type" : "multipart/form-data"
            "Content-Type" : "application/json",
        },
        // body: new URLSearchParams ({
        // }),
        body: {
            username : " ",
            mail : " ",
            password : " ",
        },
    });

    if(!requete.ok) {
        alert("Un problème est survenu");
    }
    else {
        const donnees = await requete.json();
        console.log(donnees);
    }
}

inscription();

