function createContactTag(tab)
{
  
  // DECLARATION
  const divContactTag = document.createElement('div');
  const h3ContactTag = document.createElement('h3');
  const h4ContactTag = document.createElement('h4');
  const pContactTag = document.createElement('p');
  // CONFIGURATION
  divContactTag.className = 'contact';
  h3ContactTag.innerHTML = `${tab[1]} ${tab[0]}`;
  h4ContactTag.innerHTML = `${tab[2]} - ${tab[3]}`;
  pContactTag.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, rerum, itaque quibusdam neque minus similique vitae nostrum, dolores fuga pariatur fugit necessitatibus ab? Perferendis a necessitatibus consequatur aliquam corrupti sapiente.Ea excepturi nesciunt nostrum molestias eligendi pariatur aperiam illum, totam necessitatibus doloremque, architecto aut ad officia. Cumque aliquam eligendi totam. Cumque illo iusto assumenda maxime velit in mollitia. Esse, provident?';
  
  // IMBRICATION
  divContactTag.appendChild(h3ContactTag);
  divContactTag.appendChild(h4ContactTag);
  divContactTag.appendChild(pContactTag);
  
  document.querySelector('.contacts').appendChild(divContactTag);
}

// AFFICHE MESSAGE SI PAS DE CONTACTS
if (document.querySelector('.contacts').innerHTML == ""){
  const h4EmptyContact = document.createElement('h4');
  h4EmptyContact.innerHTML = 'pas de contacts';
  document.querySelector('.contacts').appendChild(h4EmptyContact);
}

// EVENEMENT BOUTON FORMULAIRE
document.forms[0].addEventListener(
  'submit', 
  function(e) {
    e.preventDefault();
   // TABLEAU CONTENANT LES VALEURS FORMULAIRE
    const tab = [
        this.nom.value,
        this.prenom.value,
        this.tel.value,
        this.mail.value
      ];
    // CREATION CONTACT SI CHAMPS DU TABLEAU NON VIDE
    if (tab.indexOf("") === -1){ 
      // Vérification du bon format mail avec regex
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       // Vérification du format tel avec regex2
      var regex2 = /^(\+?(\d+([\.-\s]?\d)){2})+$/
        if (tab[3].match(regex)){
          if (tab[2].match(regex2)){
          // Efface le message pas de contacts puis crée un contact
          document.querySelector('.contacts h4').innerHTML = "";
          createContactTag(tab);
          } else {
            alert("le champ tel est mal renseigné !");
          }
        } else {
          alert("le champ mail est mal renseigné !");
        }
      } else {
      alert("champ(s) non renseigné");
      }
  }
);