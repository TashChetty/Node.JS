//Page 13

// const http = require('http') //require http from the Node modules and assign it to a variable http
// const server = http.createServer((req, res) =>{ //create a server + callback function
// console.log(req.url)
// res.end('Hello Node.js')
// })
// server.listen(3000) //server is listening on port 3000

//Page 15
//added routes 
// We used an if-else statement in the callback function, we check for the request url and depending on its
// path, we response with different messages. If the url contains ‘/about’, we serve the about page. If it
// contains ‘/contact’, we serve the contact page and if it’s just ‘/’, we serve the home page. If the path does
// not exist in the if-else, we default to the last else clause and respond with ‘page not found’ and also
// writeHead(404).

// const http = require('http')
// const server = http.createServer((req, res) =>{
// if(req.url === '/about')
// res.end('The about page')
// else if(req.url === '/contact')
// res.end('The contact page')
// else if(req.url === '/')
// res.end('The home page')
// else {
// res.writeHead(404)
// res.end('page not found')
// }
// })
// server.listen(3000)


//Page 18
//We have been responding to requests with static text. in the code below we are going to respond with HTML.
//We import a file system module ‘fs’ which helps us interact with files on our server.
//The readFileSync method from fs reads the content of each file and returns it. We store the content in a
//variable for each page.
//Instead of res.end() containing a static text, res.end now contains the HTML page variable

const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')
const server = http.createServer((req, res) =>{
if(req.url === '/about')
res.end(aboutPage)
else if(req.url === '/contact')
res.end(contactPage)
else if(req.url === '/')
res.end(homePage)
else {
res.writeHead(404)
res.end(notFoundPage)
}
})
server.listen(3000)

// This single function listens to a web browser’s requests, either from a computer, mobile phone or any
// other client consuming our API. We call this function a request handler. When a request comes in, this
// function looks at the request and decides how to respond. It takes two arguments, an object that
// represents the request (req) and an object that represents the response (res).