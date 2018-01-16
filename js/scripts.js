$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    var color = $("select#Favoritecolor").val();
    var food = $("select#Favoritefood").val();
    var vacation = $("select#Favoritedestination").val();

    var favorites3 = [color, food, vacation];

    var favorites0 = userfavorites.slice(0,2);
    var favorites1 = userfavorites.reverse();
    var favorites2 = userfavorites.concat(favorites1[2]);

    var newArray = favorites3.push(favorites3[0],favorites3[1],favorites3[2]);
    $(".listOutput").show();
    $("#output0").text(favorites3[0]);
    $("#output1").text(favorites3[1]);
    $("#output2").text(favorites3[2]);
    }
    event.preventDefault();
    });
  });
