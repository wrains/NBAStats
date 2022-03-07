const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
//read in the value inputted in the search
let searchValue=document.getElementById('search-input').value;
let yearValue=document.getElementById('year-input').value;

//GET request to get Tim Duncan - NEW START OF FILE
fetch(`https://www.balldontlie.io/api/v1/players?search=Tim Duncan`, requestOptions)
  .then(response => response.json())
  .then(result => {

    //hide footer
    document.querySelector("footer").style.visibility="hidden";

    //query select container
    let container = document.querySelector('main');

    // console.log(result,'result log');
    // console.log(result.data,'result.data log');
      //create section for each player
      let resp = document.createElement('section');
      resp.classList.add("player-div")
      resp.style.cssText= `display:flex;justify-content:space-around;
      flex-wrap:wrap;align-items:center;`

      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      const timD = result.data;
      // console.log(timD[0],'timD log');
      let timIdArray = [];
      // console.log(timIdArray,'timIdArray1 log');
      timIdArray.push(timD[0].id);
      // console.log(timIdArray,'timIdArray2 log');
      // console.log(timIdArray[0],'timIdArray2[0] log');
      fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2002&player_ids[]=${timIdArray[0]}`, requestOptions)
        .then(response => response.json())
        .then(resultInner => {

          // console.log(resultInner,'resultInner log')
          resp.innerHTML =
          `
          <h2>🏀 ${result.data[0].first_name} ${result.data[0].last_name} </h2>
          <p> 📆 Year 2002 </p>
          <p> ⚡️  ${resultInner.data[0].pts.toFixed(1)} pts</p>
          <p> ⚡️  ${resultInner.data[0].reb.toFixed(1)} reb</p>
          <p> ⚡️  ${resultInner.data[0].stl.toFixed(1)} stl</p>
          <p> ⚡️  ${resultInner.data[0].stl.toFixed(1)} blk</p>
          <p> ⚡️  ${resultInner.data[0].turnover.toFixed(1)} turnovers</p>
          <h3>Percentages</h3>
          <p>  ${Math.round(resultInner.data[0].fg_pct*100)}% fg</p>
          <p>  ${Math.round(resultInner.data[0].fg3_pct*100)}% 3 pt</p>
          <p>  ${Math.round(resultInner.data[0].ft_pct*100)}% ft</p>
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
    console.log(searchValue,yearValue,"search and year value log")
    fetch(`https://www.balldontlie.io/api/v1/players?search=${searchValue}`, requestOptions)
      .then(response => response.json())
      .then(result => {

        //hide footer
        document.querySelector("footer").style.visibility="hidden";

        //query select container
        let container = document.querySelector('main');

        // console.log(result,'result log');
        // console.log(result.data,'result.data log');
        //loop through player in response with forEach
        result.data.forEach(player => {
          const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          let yearValue=document.getElementById('year-input').value;

          //GET API request to get specific player season averages
          fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${yearValue}&player_ids[]=${player.id}`, requestOptions)
            .then(response => response.json())
            .then(resultInner2 => {
              console.log(resultInner2,'Results Inner 2 Log')
              //create section for each player
              let resp = document.createElement('section');

              //setting a class for the sections being added to assign styling from the css file
              resp.classList.add("player-div")
              //setting some css styling in this file for the various elements rendered
              resp.style.cssText= `display:flex;justify-content:space-around;
              flex-wrap:wrap;align-items:center;`
              //set innner html or resp variable with template strings on data from API
              resp.innerHTML =
              `
              <h2>🏀 ${player.first_name} ${player.last_name} </h2>
              <p> 📆 Year ${yearValue} </p>
              <p> ⚡️  ${resultInner2.data[0].pts.toFixed(1)} pts</p>
              <p> ⚡️ ${resultInner2.data[0].reb.toFixed(1)} reb</p>
              <p> ⚡️ ${resultInner2.data[0].stl.toFixed(1)} stl</p>
              <p> ⚡️ ${resultInner2.data[0].stl.toFixed(1)} blk</p>
              <p> ⚡️ ${resultInner2.data[0].turnover.toFixed(1)} turnovers</p>
              <h3>Percentages</h3>
              <p>  ${Math.round(resultInner2.data[0].fg_pct*100)}% fg</p>
              <p>  ${Math.round(resultInner2.data[0].fg3_pct*100)}% 3 pt</p>
              <p>  ${Math.round(resultInner2.data[0].ft_pct*100)}% ft</p>
              `;

              //append to container
              container.appendChild(resp);

              //INSERT HERE API GET REQUEST TO GOOGLE API FOR GOOGLE IMAGES FOR FOR RESULT FOR FIRST NAME AND LAST NAME OF EACH PLAYER + 'MEME'

              })
              //error catach for inner API Call
            .catch(error => console.log('error', error))
        });


    })
      //Need to change this to print no results found on the page
      .catch(error => console.log('error', error));
      //prevent page reload on submit of search bar
      e.preventDefault();
  })