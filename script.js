const tabs = document.querySelectorAll('.tab-btn');
const forms = document.querySelectorAll('.form');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Désactive tous les onglets et formulaires
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    // Active celui cliqué
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Logique simple sur soumission
document.getElementById('login').addEventListener('submit', e => {
  e.preventDefault();
  alert('Connexion simulée (à remplacer par backend)');
});

document.getElementById('register').addEventListener('submit', e => {
  e.preventDefault();
  const pass = document.getElementById('register-password').value;
  const confirmPass = document.getElementById('register-password-confirm').value;
  if (pass !== confirmPass) {
    alert('Les mots de passe ne correspondent pas.');
    return;
  }
  alert('Inscription simulée (à remplacer par backend)');
});
