$(document).ready(function () {

  function displayActivities() {
    $.get("/api/activities").then((response) => {
        console.log(response);
        $("#newActivity").html('');
        for (let i = 0; i < response.length; i++) {
        const { id, activity, picture } = response[i];
        console.log(id, activity, picture);
        console.log(response[i]);

        const card = $('<div class="card">').addClass("card");
        const image = $('<img class="card-img-top">').attr("src", picture);
        const cardBody = $("<div>").addClass("card-body");
        const activityName = $('<h5 class="card-title text-center">').text(
            activity);
        // const cardList = $('<ul class="list-group list-group-flush">').addClass("list-group list-group-flush");   
        // const cardListNote = $('<li class="list-group-note"></li>').addClass("list-group-note");
        // const cardListResource = $('<li class="list-group-link"></li>').addClass("list-group-link");
        // // add <a> for so text is link 
        const deleteButton = $(`<span><button class="delete-note" data-destination-id=${id}>X</button></span>`);

         console.log(card)
        activityName.append(deleteButton);
        // cardListNote.append(deleteButton)
        // cardListResource.append(deleteButton)
        // cardList.append(cardListNote, cardListResource)
        cardBody.append(activityName, image);
        card.append(cardBody);
        $("#newActivity").append(card);
        }
    });
  }
  displayActivities();


    // displayDestinations();
    // $(document).on("click", ".delete-destination", deleteDestination);
  
    // $.get("/api/user_data").then((response) => {
    //   const userId = response.id;
    //   console.log("user id: ", userId);
    //   getDestination(userId);
    // });
    // function getDestination(UserId) {
    //   $("#save").on("click", (event) => {
    //     event.preventDefault();
    //     const location = $("#locationInput").val().trim();
    //     const picture = $("#imgurl").val().trim();
    //     console.log(location, picture);
  
    //     const newDestination = {
    //       location,
    //       picture,
    //       UserId
    //     };
    //     console.log("New destination: ", newDestination);
    //     addDestination(newDestination);
    //   });
    // }









});   