$(document).ready(function() {

    $.get("/api/user_data").then((response) => {
        const userId = response.id;
        console.log("user id: ", userId);
        getDestination(userId);
        
        
      });
function getDestination(userId){
      $.get('/api/destinations/user/' + userId).then((response) => {
        // console.log("Destinations: ",response)
        for(let i = 0; i<response.length; i++) {
          const {id, location} = response[i];
          console.log(location)
          const dropdown = $(`<a class = "dropdown-item" data-destination-id=${id}>`)
          dropdown.append(location)
          $(".dropdown-menu").append(dropdown)
        }
      })
    }
    $(document).on('click', ".dropdown-item", getIDdest)
    function getIDdest(){
      $(".display-4").html('')
      const id = $(this).attr("data-destination-id")
      console.log(id);
      $.get("/api/destinations/" + id).then((response) => {
        console.log(response);
        const destination = response[0].location
        console.log(destination)
        $(".display-4").append("Activities for " + destination)
      })
      console.log("ID", id)
      renderActivities(id);
      getActivity(id)
    }
    
    
    function renderActivities(id){
      $(".activityBtn").append
        $.get("/api/activities/destination/" + id).then((response) => {
            $("#newActivity").html('');
            if(response.length === 0){
              const card = $('<div class="card">').addClass("card");
              const image = $('<img class="card-img-top">').attr("src", "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
              const cardBody = $("<div>").addClass("card-body");
              const destinationName = $('<h4 class="card-title text-center">').text(
                "No activities. Add some to get started!" 
              );
              const deleteButton = $(`<span><button class="delete-activity" data-activity-id=${id}>X</button>
                </span>`);
              
              destinationName.append(deleteButton);
              cardBody.append(image, destinationName);
              card.append(cardBody);
              $("#newActivity").append(card);
            }
            for (let i = 0; i < response.length; i++) {
              const { id, activity, picture, note, resource, description} = response[i];
              console.log(id, activity, picture, note, resource, description);
              console.log(response[i]);
              const card = $('<div class="card">').addClass("col-sm-6 col-md-6 col-lg-6 card");
              const image = $('<img class="card-img-top">').attr("src", picture);
              const cardBody = $("<div>").addClass("card-body");
              const destinationName = $('<h4 class="card-title text-center">').text(
                activity)
              const cardnote = $('<p class="card-text">').text(note)
              const cardlink = $('<p class="card-text">').append(`<a href = ${resource}>${description}`)
              // attr("href", resource)
              const deleteButton = $(`<span><button class="delete-activity" data-activity-id=${id}>X</button>
                </span>`);
              
              destinationName.append(deleteButton);
              cardBody.append(image, destinationName, cardnote, cardlink);
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

        function getActivity(id) {
          $("#save").on("click", (event) => {
            event.preventDefault();
            const activity = $("#act-name").val().trim();
            const picture = $("#imgurl").val().trim();
            const note = $("#act-notes").val().trim();
            const resource = $("#res-url").val().trim();
            const description = $("#descrp").val().trim();
            const DestinationId = id
            console.log("Destination ID: ", DestinationId)
           
      
            const newActivities = {
              activity,
              picture,
              note,
              resource,
              description,
              DestinationId
            };
            console.log("New activity: ", newActivities);
            addActivity(newActivities);
          });
        }

        function addActivity(newActivities) {
          $.post("/api/activities", newActivities)
            .then((response) => {
              console.log(response);
              location.reload()
            })
            .catch((error) => console.log(error));

          
        }



});