// inside app.js, we are going to make the web server which we are going to visit from the browser.
require("dotenv").config();

// making express server
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const methodOverride = require("method-override");
// to grab cookies, save them
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// connected db.js file to the application
const connectDB = require("./server/config/db");
const { isActiveRoute } = require("./server/helpers/routeHelpers");

const app = express();
// process.env.PORT is used to tell where the application can be access from on the server.
// 5000 port is for local use.
const PORT = 5000 || process.env.PORT;

// Connect to DB
connectDB();

// in order to pass data, we are adding a middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
        }),
    })
);

// to use the public folder (contains css, imgs, js)
app.use(express.static("public"));

// Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.locals.isActiveRoute = isActiveRoute;

// for all the routes
app.use("/", require("./server/routes/main"));
app.use("/", require("./server/routes/admin"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
