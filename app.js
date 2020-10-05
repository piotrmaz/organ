const express = require("express");
const https = require("https"); //native node https module
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/o-mnie", function(req, res) {
  res.render("o-mnie");
});

app.get("/galeria", function(req, res) {
  res.render("galeria");
});

app.get("/ciekawostki", function(req, res) {
  res.render("ciekawostki");
});

app.get("/kontakt", function(req, res) {
  res.render("kontakt");
});

app.post("/kontakt", function(req, res){
  let dane = req.body;
  console.log(dane);
  res.redirect("/kontakt");
});

app.listen(process.env.PORT || 3000,
	() => console.log("Server is running..."));
