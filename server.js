// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================

// route to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"public","home.html"));
  });

//   route to make a resi
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname,"public", "make.html"));
  });

//   route to view tables reserved
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname,"public", "view.html"));
  });

//   route to view json of table resi
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

//   route to view json of waitlist resi
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });


const tables = [];
const waitList = [];



app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
    
  if (tables.length < 5) {
    tables.push(req.body)
  } else {
    waitList.push(req.body);
    retur
  }
    
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  