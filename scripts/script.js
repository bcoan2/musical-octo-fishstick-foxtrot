$(document).ready(function() {
  
    //   here is an array of objects. Each array item is an object.
    const myDataArrayOfObjects = [
       {
       show: "last of us",
         status: "not caught up yet but close"
        },
       {
        show: "MH 370: The Plane That Disappeared",
         venue: "Netflix, yo!"
         },
      {
        show: "Are You The One, Season 9",
        notes: "this show is so bad. so good. but so bad. but good. "
         }
      ];
    
      
     $.each(myDataArrayOfObjects, (index, item) => {
       
       $('#thisP').append("<li>" + item.show + "</li>");
       
     
       
     })
      
    $('#thisP').append("this " + myDataArrayOfObjects[0].show + ", " + "status = " + myDataArrayOfObjects[0].status); 
    
    });