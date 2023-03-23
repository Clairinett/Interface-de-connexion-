const uploadAvatar = document.getElementById("uploadAvatar"); //recupère le bouton upload
const inputFile = document.querySelector("input[type=file]"); //recupère l'input file
const avatar = document.getElementById("avatar"); //recupère la div avatar pour pouvoir mettre l'image d'avatar dedant

uploadAvatar.addEventListener("click", () => inputFile.click());  //des qu'un click est sur le bouton on utilise input pour transmettre des fichiers
//ici accepter (voir html)

inputFile.addEventListener("change", event => {  
    const file = event.target.files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onloadend = () => {
        avatar.setAttribute("aria-label", file.name);
        avatar.style.background = `url(${reader.result}) center center/cover`;
    };
});



// https://brains.hashnode.dev/upload-user-avatar-with-a-custom-upload-button
// a revoir 