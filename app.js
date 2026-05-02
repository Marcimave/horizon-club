// EMAILJS
emailjs.init("_Rsd7tKRnqGXz8u19");

// FORMULAIRE
const form = document.getElementById("formulaire");
const confirmation = document.getElementById("confirmation");

// SI LE FORMULAIRE EXISTE
if(form){

  form.addEventListener("submit",function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const title =
    document.getElementById("title").value.trim();

    const message =
    document.getElementById("message").value.trim();

    // VALIDATION
    if(!name || !email || !title || !message){

      confirmation.style.color = "red";

      confirmation.textContent =
      "Veuillez remplir tous les champs.";

      return;
    }

    // ENVOI EMAIL
    emailjs.send(
      "service_icixjxf",
      "template_kwa4moh",
      {
        name:name,
        email:email,
        title:title,
        message:message
      }
    )

    .then(function(){

      confirmation.style.color = "green";

      confirmation.textContent =
      "Message envoyé avec succès ✅";

      form.reset();
    })

    .catch(function(error){

      confirmation.style.color = "red";

      confirmation.textContent =
      "Erreur : " + JSON.stringify(error);
    });

  });

}
