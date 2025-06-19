alert("Votre site tout droit réservé");

document.getElementById("search-button").addEventListener("click", function () {
  var searchTerm = document.getElementById("search-input").value;
  alert("Vous avez recherché : " + searchTerm);
});
