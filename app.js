var express = require("express");
var app = express();

app.use(express.static(__dirname + 'public'));

app.get("/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});