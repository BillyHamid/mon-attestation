document.getElementById('btnLogin').addEventListener('click', function () {
  const pw = document.getElementById('password').value;
  const correct = "formation2025"; // Change ici le mot de passe

  if (pw === correct) {
    document.getElementById('auth').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  } else {
    alert('Mot de passe incorrect !');
  }
});
