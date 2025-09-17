import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

dotenv.config();

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM blogs");
    res.render("index.ejs", { blogs: result.rows });
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/about", async (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", async (req, res) => {
    res.render("contact.ejs");
});

app.get("/create", async (req, res) => {
    res.render("create.ejs");
});

app.post("/submit", async (req, res) => {
    const { title, content } = req.body;

    // Create a new blog object
    try {
        await db.query("INSERT INTO blogs (title, content, date_created) VALUES ($1, $2, $3)", [title, content, new Date()]);
        res.redirect("/");
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route to view individual blog post
app.get("/blog/:id", async (req, res) => {
    const blogId = parseInt(req.params.id);
    try {
        const result = await db.query("SELECT * FROM blogs WHERE id = $1", [blogId]);
        const blog = result.rows[0];
        if (blog) {
            res.render("blog.ejs", { blog: blog });
        } else {
            res.status(404).send("Blog not found");
        }
    } catch (err) {
        console.error("Error fetching blog:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route to display edit form for a specific blog
app.get("/edit/:id", async (req, res) => {
    const blogId = parseInt(req.params.id);
    try {
        const result = await db.query("SELECT * FROM blogs WHERE id = $1", [blogId]);
        const blog = result.rows[0];
        if (blog) {
            res.render("edit.ejs", { blog: blog });
        } else {
            res.status(404).send("Blog not found");
        }
    } catch (err) {
        console.error("Error fetching blog:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route to handle blog edit submission
app.post("/edit/:id", async (req, res) => {
    const blogId = parseInt(req.params.id);
    const { title, content } = req.body;

    try {
        await db.query("UPDATE blogs SET title = $1, content = $2, date_updated = $3 WHERE id = $4", [title, content, new Date(), blogId]);
        res.redirect(`/blog/${blogId}`);
    } catch (err) {
        console.error("Error updating blog:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route to handle blog deletion
app.post("/delete/:id", async (req, res) => {
    const blogId = parseInt(req.params.id);
    try {
        await db.query("DELETE FROM blogs WHERE id = $1", [blogId]);
        res.redirect("/");
    } catch (err) {
        console.error("Error deleting blog:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});