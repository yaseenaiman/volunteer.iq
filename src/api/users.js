const basicAuth = require("express-basic-auth");

const auth = basicAuth({
  users: {
     email: "omar12@gmail.com",
    password : "baghdad",
  },
});
