import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { value: "Enter Your Name Below 👇",first_name:"First Name",last_name:"Last Name" });
});
app.post("/relode",(req,res)=>{
  res.redirect("/")
})
app.post("/submit", (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  // console.log(firstName,lastName)
  let concatstring = firstName.concat(lastName);

  res.render("index.ejs", {
    value: `There are ${concatstring.length} letters in your name`,
    first_name : firstName,
    last_name : lastName
  });
  // console.log(concatstring.length)
  // for (let index = 0; index < concatstring.length; index++) {
  //   const element = concatstring[index];
  //   console.log(element)
  // }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
