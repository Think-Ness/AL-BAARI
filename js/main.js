const scriptURL = 'https://script.google.com/macros/s/AKfycbxy3ISnH05eDfwIMhADHFjftQn6CqtTpWHPVdOk7Aio_uvxZi1-0ViXdLJSpkztgGCs/exec'

const form = document.forms['contact-form']
let namaPengirim = document.getElementById("namaPengirim").value;
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Terima kasih, " + namaPengirim ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keyup",e =>{
//   // textarea.style.height = "auto";
//   let scHeight = e.target.scrolHeight;
//   textarea.style.height = `${scHeight}px`;
// })