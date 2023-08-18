const port = 3000,
express = require("express"), //added express midule to the application
app = express();        //assigned the express application to the app constant
app.get("/", (req, res) => {    //set up a get route for the home page
res.send("Hello, Universe!");   //issued a response from the server to teh client with res.send
})
.listen(port, () => {       //set application to be listening on port 3000
console.log(`The Express.js server has started and is listening on port number: ${port}`);
});