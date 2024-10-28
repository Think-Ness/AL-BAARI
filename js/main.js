const scriptURL = 'https://script.google.com/macros/s/AKfycbxy3ISnH05eDfwIMhADHFjftQn6CqtTpWHPVdOk7Aio_uvxZi1-0ViXdLJSpkztgGCs/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Oke pesan anda kami terima 😚" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})