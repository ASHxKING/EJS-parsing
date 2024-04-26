import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("app.ejs");
});
app.post("/submit", (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let concatstringlength = firstName.concat(lastName).length;

  res.render("app.ejs", {
    concatstring : concatstringlength
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
