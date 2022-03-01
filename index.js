
//GET request to get the players data
let searchBar=document.querySelector("#search-bar");

searchBar.addEventListener("submit",function (e) {

    document.querySelector('main').innerHTML=``;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch("https://www.balldontlie.io/api/v1/players", requestOptions)
      .then(response => response.json())
      .then(result => {

        //hide footer
        document.querySelector("footer").style.visibility="hidden";

        //query select container
        let container = document.querySelector('main');
        container.style.height = "";

        console.log(result,'result log');
        console.log(result.data,'result.data log');
        result.data.forEach(player => {

          let resp = document.createElement('section');
          resp.classList.add("player-div")
          resp.innerHTML =
          `
          <h2>🏀 ${player.first_name} ${player.last_name} </h2>
          <p>  </p>
          `;
          container.appendChild(resp);

        });


    })
      .catch(error => console.log('error', error));
    e.preventDefault();
  })