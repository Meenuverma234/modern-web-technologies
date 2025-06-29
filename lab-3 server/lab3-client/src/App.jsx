import React, { useState } from "react";
import axios from "axios";
import './App.css'; // ✅ Import the CSS file

function App() {
  const [randomImages, setRandomImages] = useState([]);
  const [dogImage, setDogImage] = useState("");

  const handleUpload = async (e) => {
    const formData = new FormData();
    for (let file of e.target.files) {
      formData.append("images", file);
    }
    await axios.post("http://localhost:5000/upload", formData);
    alert("🎉 Images uploaded!");
  };

  const fetchRandomImages = async () => {
    const res = await axios.get("http://localhost:5000/random-images");
    setRandomImages(res.data);
  };

  const getDog = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    setDogImage(res.data.message);
  };

  const uploadDog = async () => {
    await axios.post("http://localhost:5000/upload-dog", { url: dogImage });
    alert("🐶 Dog image uploaded!");
  };

  return (
    <div className="container">
      <h1 className="title">📸 Lab 3 – Image Upload & Display</h1>

      <section className="section">
        <h2 className="heading">🖼 Upload Multiple Images</h2>
        <input type="file" multiple onChange={handleUpload} className="input" />
      </section>

      <section className="section">
        <h2 className="heading">🌈 Show 3 Random Images</h2>
        <button className="button" onClick={fetchRandomImages}>
          Show Random Images
        </button>
        <div className="image-grid">
          {randomImages.map((img, i) => (
            <img key={i} src={img} alt="random" className="image" />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="heading">🐶 Get a Random Dog</h2>
        <button className="button" onClick={getDog}>
          Get Dog Image
        </button>
        {dogImage && (
          <div className="dog-section">
            <img src={dogImage} alt="dog" className="dog-image" />
            <button className="upload-button" onClick={uploadDog}>
              Upload Dog Image
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
