const express = require("express");
const app = express();
const now = new Date();
// console.log(now);
const dayOfWeek = now.getDay();
console.log(dayOfWeek);
const hourOfDay = now.getHours();
console.log(hourOfDay);
app.use(
  (date = (req, res, next) => {
    if (hourOfDay > 9 && hourOfDay < 18 && dayOfWeek >= 1 && dayOfWeek <= 6) {
      next();
    } else {
      res.send("<h1>Arja3  Ghodwa</h1>");
    }
  })
);
const port = 3000;
app.use(express.static("views"));
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/services", (req, res) => {
//   res.render("services");
// });

// app.get("/contact", (req, res) => {
//   res.render("contact");
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
