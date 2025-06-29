const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const { sampleSize } = require("lodash");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

app.post("/upload", upload.array("images", 10), (req, res) => {
  res.json({ message: "Images uploaded!" });
});

app.get("/random-images", (req, res) => {
  const files = fs.readdirSync("uploads");
  const random = sampleSize(files, 3);
  const urls = random.map(file => `http://localhost:${PORT}/uploads/${file}`);
  res.json(urls);
});

app.post("/upload-dog", async (req, res) => {
  const { url } = req.body;
  const path = `uploads/dog-${Date.now()}.jpg`;

  const response = await axios({ url, responseType: "stream" });
  const writer = fs.createWriteStream(path);
  response.data.pipe(writer);

  writer.on("finish", () => res.json({ message: "Dog image saved" }));
  writer.on("error", () => res.status(500).send("Error"));
});

app.listen(PORT, () => console.log("Server running at http://localhost:5000"));
