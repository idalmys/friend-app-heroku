const express=require("express");

//using the router method 
const router=express.Router();

//instance of friends.js 
const dataFriends= require("../data/friends")

//Get data
router.get("/api/friends",(req,res)=>{
    res.json(dataFriends);
})

// send data to the server
router.post("/api/friends",(req,res)=>{ 
     
     //Get the score 
    var scores = req.body.scores;

     // Convert to array
    var scoreConverted = scores.map(item=>{
        return parseInt(item,10);
    })

    // Create new user to send to api/friends
    var newF = {
        name:req.body.name,
        foto: req.body.foto,
        scores : scoreConverted
    }
   
    
    var resta = [];
 
  //for loop to move into the datafriends array
  for (var i = 0; i < dataFriends.length; i++) {
    var totaldifference =0;

            //for loop to move into the scores that belong to each friends
            for (var j = 0; j < scoreConverted.length; j++) {
                
                totaldifference +=(Math.abs(scoreConverted[j] - dataFriends[i].scores[j])) ;
                       
            }
            resta.push(totaldifference) 
         
            // grab the min value 
            var bestmach = Math.min(...resta);

            //Grab the position into the array 

            var position =resta.indexOf(bestmach);
}           
            // User with the least difference into the array
            var friendBest ={
                name: dataFriends[position].name,
                foto : dataFriends[position].foto,
                bestmatch : bestmach

            }
                
    // Add to the datafriends array the newFriend created
     dataFriends.push(newF);

    //Send object json with the best match against the new user added
     res.json(friendBest);
  

});



module.exports=router;