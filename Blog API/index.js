import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// Hardcoded posts for testing
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET All posts
app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
})

// GET a post by id
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const post = posts.find(post => post.id === id);
    console.log("- ID: " + post.id + "\nTitle: " + post.title + "\nContent: " + post.content + "\nAuthor: " + post.author + "\nDate: " + post.date)
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: "Post not found" });
  }
  
})

// POST a new post
app.post("/posts", (req, res) => {
  if (!req.body.title || !req.body.content || !req.body.author) {
    res.status(400).json({ message: "Please provide all required fields" });
  }
  else{
    try{
    const newID = posts.length + 1;
    const newPost = {
      id: newID,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      date: "today",
    }
    console.log("- ID: " + newPost.id + "\nTitle: " + newPost.title + "\nContent: " + newPost.content + "\nAuthor: " + newPost.author + "\nDate: " + newPost.date);
    posts.push(newPost);
    res.status(201).json(newPost);
    }
    catch {
      console.log(error);
      res.status(500).json({ message: "Error creating post" });
    }
  }
})

// PATCH an update to a post element 
app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const post = posts.find(post => post.id === id);
    console.log("- Updateing: " + post)
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.author = req.body.author || post.author; 
    console.log("- Updated: ID:" + post.id + " Title: " + post.title + " Content: " + post.content + " Author: " + post.author + "\nDate: " + newPost.date);
    res.json(post);
  } catch (error) {
    res.status(404).json({ message: "Post not found" });
  }
})

// DELETE a post by id.
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try{
    posts.splice(id-1, 1);
    console.log("- Deleted post with ID: " + id);
    res.status(200).json({ message: "Post with " + id + " deleted" });
    // reset IDs so there are no gaps
    let resetID = 1;
    posts.forEach(post => {
      post.id = resetID;
      resetID++;
      console.log("- Reset ID: " + post.id + "\nTitle: " + post.title + "\nContent: " + post.content + "\nAuthor: " + post.author + "\nDate: " + newPost.date);
    });
  }
  catch(error){
    res.status(404).json({ message: "Post not found" });
  }
})

app.listen(port, () => {
  console.log(`- API is running at http://localhost:${port}`);
});
