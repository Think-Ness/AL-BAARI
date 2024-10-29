const scriptURL = 'https://script.google.com/macros/s/AKfycbxy3ISnH05eDfwIMhADHFjftQn6CqtTpWHPVdOk7Aio_uvxZi1-0ViXdLJSpkztgGCs/exec'

function getInputValue(){
  var pengirim = document.getElementById("pengirim").value;

const form = document.forms['contact-form'];
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Syukron bolo... 😚😚"  + pengirim))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})};