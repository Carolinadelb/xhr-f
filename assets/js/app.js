const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImg = document.getElementById('img');

inputText.addEventListener('keypress',(event) => {
  let key = event.which || event.keyCode; //which keyCodo son método que saca el código de la tecla
  if (key === 13) { //código 13 es enter
    let movie = inputText.value; //punto value siempre con let
    console.log(movie);
    inputText.value = '';
    //URL de api, más el key mandaron por correo:
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=fb3a86be`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderInfo(data);

    })
  }
})
const renderInfo = (data) => {
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRuntime.innerHTML = data.Runtime;
  containerImg.innerHTML = `<img src="${data.Poster}">`;
} 