const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = [];
let works = [];

app.get("/", function(req, res){

let day = date.getDate();

  res.render("list", {title: day, newItem: items});

});

app.post("/", function(req, res){
  console.log(req.body);
  if(req.body.list === "work"){
    works.push(req.body.work);

    res.redirect("/work");
  }
  else{
    items.push(req.body.work);

    res.redirect("/");
  }

})

app.get("/work", function(req, res){
  res.render("list", {title: "work", newItem: works});
});


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
