const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.balldontlie.io/api/v1/players", requestOptions)
  .then(response => response.json())
  .then(result => {
    document.querySelector("footer").style.visibility="hidden";
    let container = document.querySelector('main');
    container.style.height = "";

    console.log(result,'result log');
    console.log(result.data,'result.data log');
    result.data.forEach(player => {

      let resp = document.createElement('section');
      resp.innerHTML = `<section class= "player-divs">${player.first_name} ${player.last_name}</section>`;
      container.appendChild(resp);
      // const players = [];
      // players.map(player);
    });




})
  .catch(error => console.log('error', error));