// Search Button Alert
document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();
  if (query) alert(`Vous avez recherché : ${query}`);
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    document.getElementById("confirmationMessage").classList.remove("hidden");
    this.reset();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
});

