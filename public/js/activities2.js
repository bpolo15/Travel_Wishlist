$(document).ready(function() {

    $.get("/api/user_data").then((response) => {
        const userId = response.id;
        console.log("user id: ", userId);
        getDestination(userId);
        
      });
function getDestination(userId){
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
    }
    $(document).on('click', ".dropdown-item", getIDdest)
    function getIDdest(){
      console.log("click")
      const id = $(this).attr("data-destination-id")
      console.log(id);
      renderActivities(id);
    }

    function renderActivities(id){
        $.get("/api/activities/destination/" + id).then((response) => {
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














});