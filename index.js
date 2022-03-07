const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
//read in the value inputted in the search
let searchValue=document.getElementById('search-input').value;

//GET request to get Tim Duncan - NEW START OF FILE
fetch(`https://www.balldontlie.io/api/v1/players?search=Tim Duncan`, requestOptions)
  .then(response => response.json())
  .then(result => {

    //hide footer
    document.querySelector("footer").style.visibility="hidden";

    //query select container
    let container = document.querySelector('main');

    console.log(result,'result log');
    console.log(result.data,'result.data log');
      //create section for each player
      let resp = document.createElement('section');
      resp.classList.add("player-div")

      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const timD = result.data;
      console.log(timD[0],'timD log');
      let timIdArray = [];
      console.log(timIdArray,'timIdArray1 log');
      timIdArray.push(timD[0].id);
      console.log(timIdArray,'timIdArray2 log');

      fetch(`https://www.balldontlie.io/api/v1/stats?player_ids=[${timD[0].id}]`, requestOptions)
        .then(response => response.json())
        .then(resultInner => {

          resp.innerHTML =
          `
          <h2>🏀 ${result.data[0].first_name} ${result.data[0].last_name} </h2>
          <p>  </p>
          `;
          container.appendChild(resp);

          })
        .catch(error => console.log('error', error))
      })
  .catch(error => console.log('error', error));



//declare searchbar element using DOM
let searchBar=document.querySelector("#search-bar");

//add event listener on submit
searchBar.addEventListener("submit",function (e) {
    //clear container element
    document.querySelector('main').innerHTML=``;
    //set request options
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    //read in the value inputted in the search
    let searchValue=document.getElementById('search-input').value;

    //GET request to get the players data
    fetch(`https://www.balldontlie.io/api/v1/players?search=${searchValue}`, requestOptions)
      .then(response => response.json())
      .then(result => {

        //hide footer
        document.querySelector("footer").style.visibility="hidden";

        //query select container
        let container = document.querySelector('main');

        console.log(result,'result log');
        console.log(result.data,'result.data log');
        //loop through player in response with forEach
        result.data.forEach(player => {
          //create section for each player
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
      //prevent page reload on submit of search bar
      e.preventDefault();
  })