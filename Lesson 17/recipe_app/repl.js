const mongoose = require("mongoose"), //require Mongoose
  Subscriber = require("./models/subscriber"), //assign the subscriber model to a variable using he model name and local project file.
  Course = require("./models/course");  //require the course model

var testCourse, testSubscriber; //set up two variables outsode the promise chain

mongoose.connect(   //set up a database connectionusing recipe_db
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;  //tell Mongoose to use native promises as in main.js

Subscriber.remove({})   //remove all subscribers and courses
  .then(items => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Course.remove({});
  })
  .then(items => console.log(`Removed ${items.n} records!`))
  .then(() => {   //create a new subscriber
    return Subscriber.create({
      name: "Jon",
      email: "jon@jonwexler.com",
      zipCode: "12345"
    });
  })
  .then(subscriber => {
    console.log(`Created Subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Subscriber.findOne({
      name: "Jon"
    });
  })
  .then(subscriber => {
    testSubscriber = subscriber;
    console.log(`Found one subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {         //create a new course
    return Course.create({
      title: "Tomato Land",
      description: "Locally farmed tomatoes only",
      zipCode: 12345,
      items: ["cherry", "heirloom"]
    });
  })
  .then(course => {
    testCourse = course;    //create a new course instance
    console.log(`Created course: ${course.title}`);
  })
  .then(() => {     //associate the course with the subscriber
    testSubscriber.courses.push(testCourse);  
    testSubscriber.save();
  })
  .then(() => {     //populate the course document in subscriber
    return Subscriber.populate(testSubscriber, "courses");
  })
  .then(subscriber => console.log(subscriber))
  .then(() => {       //query subscribers where ObjectId is same as the course
    return Subscriber.find({
      courses: mongoose.Types.ObjectId(testCourse._id)
    });
  })
  .then(subscriber => console.log(subscriber));
