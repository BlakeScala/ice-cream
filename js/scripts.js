var flavors = ["Vanilla", "Chocolate", "Mint", "Oreo"];

$(document).ready(function(event){
    flavors.forEach(function(flavor){
       $("#output").append("<li>" + flavor + "</li>");
    });

    event.preventDefault();
});
