const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://www.balldontlie.io/api/v1/players", requestOptions)
  .then(response => response.json())
  .then(result => {
    let container = document.querySelector('#container');
    container.innerHTML = ``;

    console.log(result);
    let resp = document.createElement('section');
    resp.innerHTML = `<section>${result}</section>`;
    document.querySelector('#container').appendChild(resp);


})
  .catch(error => console.log('error', error));