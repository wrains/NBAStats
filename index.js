const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.balldontlie.io/api/v1/players", requestOptions)
  .then(response => response.json())
  .then(result => {
    let container = document.querySelector('#container');
    container.innerHTML = ``;

    console.log(result,'result log');
    console.log(result.data,'result.data log');
    result.data.forEach(player => {

      let resp = document.createElement('section');
      resp.innerHTML = `<section>${player.first_name} ${player.last_name}</section>`;
      container.appendChild(resp);
      // const players = [];
      // players.map(player);
    });

    let resp = document.createElement('section');
    resp.innerHTML = `<section>${result}</section>`;
    container.appendChild(resp);




})
  .catch(error => console.log('error', error));