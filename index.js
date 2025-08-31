import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Array to store blogs in memory
let blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { blogs: blogs });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/submit", (req, res) => {
    const { title, content } = req.body;
    
    // Create a new blog object with a unique ID
    const newBlog = {
        id: blogs.length + 1,
        title: title,
        content: content,
        dateCreated: new Date().toLocaleDateString()
    };
    
    // Add the new blog to the blogs array
    blogs.push(newBlog);
    
    // Redirect to home page
    res.redirect("/");
});

// Route to view individual blog post
app.get("/blog/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === blogId);
    
    if (blog) {
        res.render("blog.ejs", { blog: blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

// Route to display edit form for a specific blog
app.get("/edit/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === blogId);
    
    if (blog) {
        res.render("edit.ejs", { blog: blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

// Route to handle blog edit submission
app.post("/edit/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blogIndex = blogs.findIndex(b => b.id === blogId);
    
    if (blogIndex !== -1) {
        // Update the blog
        blogs[blogIndex] = {
            id: blogId,
            title: req.body.title,
            content: req.body.content,
            dateCreated: blogs[blogIndex].dateCreated, // Keep original creation date
            dateUpdated: new Date().toLocaleDateString()
        };
        res.redirect(`/blog/${blogId}`);
    } else {
        res.status(404).send("Blog not found");
    }
});

// Route to handle blog deletion
app.post("/delete/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blogIndex = blogs.findIndex(b => b.id === blogId);
    
    if (blogIndex !== -1) {
        blogs.splice(blogIndex, 1);
        res.redirect("/");
    } else {
        res.status(404).send("Blog not found");
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});