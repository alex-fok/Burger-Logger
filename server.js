const express = require('express');
const app = express();

// Request Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
const routes = require('./controllers/burgers_controller');
app.use(routes);

// View
app.use(express.static("public"));
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Port & Listen
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening in port ${PORT}`);
})