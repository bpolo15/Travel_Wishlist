$(document).ready(function () {

    $.get("/api/user_data").then((response) => {
        const userId = response.id;
        console.log("user id: ", userId);
        getDestination(userId);
        displayDestinations(userId)
        
      });

    function displayDestinations(userId) {
     
      $.get("/api/destinations/user/" + userId).then((response) => {
        console.log(response);
        $("#newDestination").html('');
        for (let i = 0; i < response.length; i++) {
          const { id, location, picture } = response[i];
          console.log(id, location, picture);
          console.log(response[i]);
  
          const activityLink = $(`<a href=/activities/>`);
          const card = $('<div class="card">').addClass("col-lg-4 col-md-4 col-lg-6 card");
          const image = $('<img class="card-img-top">').attr("src", picture);
          const cardBody = $("<div>").addClass("card-body");
          const destinationName = $('<h4 class="card-title text-center">').text(
            location
          );
          const deleteButton = $(`<span><button class="delete-destination" data-destination-id=${id}>X</button>
            </span>`);
          activityLink.append(image);
          destinationName.append(deleteButton);
          cardBody.append(activityLink, destinationName);
          card.append(cardBody);
          $("#newDestination").append(card);3
        }
      });
    }
  
    // displayDestinations();
    $(document).on("click", ".delete-destination", deleteDestination);
  
   
    function getDestination(UserId) {
      $("#save").on("click", (event) => {
        event.preventDefault();
        const location = $("#locationInput").val().trim();
        const picture = $("#imgurl").val().trim();
        console.log(location, picture);
  
        const newDestination = {
          location,
          picture,
          UserId
        };
        console.log("New destination: ", newDestination);
        addDestination(newDestination);
      });
    }
  
    function addDestination(newDestination) {
      $.post("/api/destinations", newDestination)
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => console.log(error));
    }
  
    function deleteDestination() {
      console.log("DELETE");
      event.preventDefault();
      const id = $(this).attr("data-destination-id");
      console.log(id);
  
      $.ajax({
        url: "/api/destinations/" + id,
        method: "DELETE",
      })
        .then((response) => {
          console.log(response);
          location.reload();
        })
        .catch((error) => console.log(error));
    }
  
    // $("#exampleModal").on("show.bs.modal", function (event) {
    //   console.log("Button");
    //   var button = $(event.relatedTarget); // Button that triggered the modal
    //   var recipient = button.data("whatever"); // Extract info from data-* attributes
    //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //   var modal = $(this);
    //   modal.find(".modal-title").text("New message to " + recipient);
    //   modal.find(".modal-body input").val(recipient);
    // });
  });