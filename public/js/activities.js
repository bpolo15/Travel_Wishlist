$(document).ready(function() {


  $.get('/api/destinations/user/' + userId).then((response) => {
    console.log("Destinations: ",response)
    for(let i = 0; i<response.length; i++) {
      const {id, location} = response[i];
      console.log(location);
      const dropdown = $(`<a class = "dropdown-item" data-destination-id=${id}>`)
      dropdown.append(location)

      $(".dropdown-menu").append(dropdown)
    }
  })

  $(document).on('click', ".dropdown-item", getDestination)
  function getDestination(){
    console.log("click")
    const id = $(this).attr("data-destination-id")
    console.log(id);

  }


  function displayActivity() {
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
        const destinationName = $('<h4 class="card-title text-center">').text(
          activity
        );
        const deleteButton = $(`<span><button class="delete-activity" data-activity-id=${id}>X</button>
          </span>`);
        
        destinationName.append(deleteButton);
        cardBody.append(image, destinationName);
        card.append(cardBody);
        $("#newActivity").append(card);
      }
    });
  }
displayActivity();
$(document).on("click", ".delete-activity", deleteActivity);

function deleteActivity() {
  console.log("DELETE");
  event.preventDefault();
  const id = $(this).attr("data-activity-id");
  console.log(id);

  $.ajax({
    url: "/api/activities/" + id,
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
      location.reload();
    })
    .catch((error) => console.log(error));

    
}


$.get("/api/destinations").then((response) => {
  const userId = response.id;
  console.log("id: ", userId);
  // getDestination(userId);
});




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

// function addDestination(newDestination) {
//   $.post("/api/destinations", newDestination)
//     .then((response) => {
//       console.log(response);
//       displayDestinations();
//     })
//     .catch((error) => console.log(error));
// }

});