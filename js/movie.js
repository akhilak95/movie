$(document).ready( () =>{
 goon();//function 
$(".home").click( ()=>{//start of function
  $(".home").addClass("headcol")
  $(".movie").removeClass("headcol")
  $(".anime").removeClass("headcol")
  $(".season").removeClass("headcol")
  })//end of function
$(".movie").click( ()=>{//start of function
  $(".movie").addClass("headcol")
  $(".home").removeClass("headcol")
  $(".anime").removeClass("headcol")
  $(".season").removeClass("headcol")
  })//end of function
$(".anime").click( ()=>{//start of function
  $(".anime").addClass("headcol")
  $(".movie").removeClass("headcol")
  $(".home").removeClass("headcol")
  $(".season").removeClass("headcol")
  })//end of function
$(".season").click( ()=>{//start of function
  $(".season").addClass("headcol")
  $(".movie").removeClass("headcol")
  $(".anime").removeClass("headcol")
  $(".home").removeClass("headcol")
  })//start of function
$(".bytitle").click( ()=>{//start of function
  $(".bytitle").addClass('color')
  $(".byid").removeClass('color')
  $(".byyear").removeClass('color')
  })//end of function
$(".byid").click( ()=>{//start of function
  $(".byid").addClass('color')
  $(".bytitle").removeClass('color')
  $(".byyear").removeClass('color')
  })//end of function
$(".byyear").click( ()=>{//start of function
  $(".byyear").addClass('color')
  $(".byid").removeClass('color')
  $(".bytitle").removeClass('color')
  })//end of function


})



//start of function
let goon = ()=>{ 
    let search = 0;
    $("#bytitle").click( ()=>{
      $('#search').val("");
      $("#search").attr('placeholder', 'Enter name')
    $('input[type=year]').hide()
    search =  1;
  })
  $("#byid").click( () =>{
    $('#search').val("");
    $("#search").attr('placeholder', 'Enter id (e.g.tt1285016 )')
    $('input[type=year]').hide()
    search = 2;
    })
  $("#byyear").click( () =>{
    $('#search').val("");
    $('input[type=year]').val("");
    $("#search").attr('placeholder','Enter name')
    $('input[type=year]').attr('placeholder','Enter year')
    $('input[type=year]').show()
    search = 3;
    })
  $("#button").click(() =>{
    let element = document.getElementById('search').value;
    let year = document.getElementById('year').value;
    //start of if loop
    if(element.length == 0 )
    {
    $( "input" ).effect( "bounce", "fast" );
    }//end of if loop
    else{//start of else loop
      $('.movieinformation').first().remove();
      $('.rating').first().remove();
       url1=`https://www.omdbapi.com/?apikey=53454e1d&t=${element}`
       url2=`https://www.omdbapi.com/?apikey=53454e1d&i=${element}`
       url3=`https://www.omdbapi.com/?apikey=53454e1d&t=${element}&y=${year}`
      let urlmain = url1
      if (search == 2){
      //start of if loop
         urlmain = url2
         }//end of if loop
      if (search == 3){
      //start of if loop
          urlmain = url3
          }//end of if loop
  
      $.ajax({
      type:'GET',
      datatype:'JSON',
      url:urlmain,
      success: (data) => { // in case of success response
            console.log(data)
            let tempRow = ""
            let allPeople = data
                 if(data.Title == undefined){//start of if loop
                  alert("Information entered is incorrect.Please Enter Valid information")
                }//end of if loop
                else{//start of else loop
                let tempRow = `<div class ="movieinformation" >
                 <div class="movietitle">${data.Title}(${data.Year})</div>
                 <div class="card movieinfo" style="">
                    <div class="card flex-xl-row flex-lg-row ">
                      <div class="card-header border-0">
                        <img src="${data.Poster}"  class="poster" onerror="this.src='images/imgnt.jpg';">
                      </div>
                            <div class="card-block px-2">
                            <h4 class="card-title">Director</h4>
                            <p class="card-text">${data.Director}</p>
                            <h4 class="card-title">Writer</h4>
                            <p class="card-text">${data.Writer}</p>
                            <h4 class="card-title">Plot</h4>
                            <p class="card-text">${data.Plot}</p>
                            <h4 class="card-title">Genre</h4>
                            <p class="card-text">${data.Genre}</p>
                            <h4 class="card-title">Type</h4>
                            <p class="card-text">${data.Type}</p>
                            <h4 class="card-title">Language</h4>
                            <p class="card-text">${data.Language}</p>
                            <h4 class="card-title">Country</h4>
                            <p class="card-text">${data.Country}</p>
                            <h4 class="card-title">Run time</h4>
                            <p class="card-text">${data.Runtime}</p>
                      </div>
                    </div>
                    <ul class="list-group list-group-flush" style="font-size:20px">
                      <li class="list-group-item"><span style="font-weight:bold">Released: </span>${data.Released} </li>
                      <li class="list-group-item"><span style="font-weight:bold">DVD:</span> ${data.DVD} </li>
                      <li class="list-group-item"><span style="font-weight:bold">Rated:</span> ${data.Rated}</li>
                      <li class="list-group-item"><span style="font-weight:bold">Awards:</span> ${data.Awards}</li>
                      <li class="list-group-item"><span style="font-weight:bold">Metascore: </span>${data.Metascore} <span style="margin-left:1vw;font-weight:bold"> imdbRating: </span>${data.imdbRating}<span style="margin-left:1vw;font-weight:bold"> imdbVotes:</span> ${data.imdbVotes} </li>
                      <li class="list-group-item"><span style="font-weight:bold">Production:</span> ${data.Production}</li>
                      <li class="list-group-item"><span style="font-weight:bold">BoxOffice:</span> ${data.BoxOffice}</li>
                      <li class="list-group-item"><span style="font-weight:bold"> Website:</span><a href=" ${data.Website}">${data.Website}</a></li>
                    </ul>
                  </div> </div>`
                console.log(data.Ratings)
                $("#slider").append(tempRow)

                for (x of data.Ratings)//start of for loop
                  {
                    let tempRow1 =` 
                      <div class="card rating" >
                      <ul class="list-group list-group-flush" style="font-size:20px">
                      <li class="list-group-item"><span style="font-weight:bold">${x.Source}:</span> ${x.Value} </li>
                        </ul></div>`
                    $(".movieinformation").append(tempRow1); }//end for loop
                  } 
                },
                error: (data) => { // in case of error response
                   alert("some error occured.Please check data connection.")
                     },
                beforeSend: () => { // while request is processing.
                // you can use loader here.
                       },
                complete: () => {// what you want to do while request is completed
                 
                 },
                  timeout:3000
                })
                  }
                })
        }//end of function
