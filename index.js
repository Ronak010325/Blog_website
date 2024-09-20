import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirName = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let Title;
let Body;

app.get("/" , (req,res)=>{
    res.render("index.ejs" , {
        title : Title,
        body : Body,
    });
})

app.get("/blog-post" , (req , res)=> {
    res.render("index.ejs");
})

app.get("/form" , (req , res)=> {
    res.render("form.ejs");
})

app.get("/edit" , (req , res) => {
    res.render("form.ejs" , {
        title : Title,
        body : Body,
    });
})

app.get("/About-us" , (req , res)=> {
    res.render("about_us.ejs");
})

app.get("/Contact-us" , (req , res) => {
    res.render("contact_us.ejs");
})

app.post("/comment" , (req , res)=> {
    res.render("index.ejs");
})

app.post("/" , (req,res)=> {
    Title = req.body.title;
    Body = req.body.body;
     res.redirect("/");
    })

app.listen(port , ()=> {
    console.log("Listining on Port "+port);
})