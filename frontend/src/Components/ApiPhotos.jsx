import { useEffect, useState } from "react";
import "../Css/SearchPage.css";

export default function ApiPhotos({ query }) {
  const [photos, setPhotos] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY_PEXELS;
  const apiURL = process.env.REACT_APP_API_URL_PEXELS;

  useEffect(() => {
    if (!query || !apiKey || !apiURL) return;
    fetch(`${apiURL}query=${query}&per_page=3`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Pexels API data:", data);
        setPhotos(data.photos || []);
      });
  }, [query, apiKey, apiURL]);

  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.src.medium}
          alt={photo.alt || "Pexels"}
          className="PhotoGallery"
        />
      ))}
    </div>
  );
}
