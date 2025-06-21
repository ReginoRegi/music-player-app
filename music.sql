CREATE DATABASE music_app;

USE music_app;

CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  artist VARCHAR(255),
  preview_url VARCHAR(255),
  cover_url VARCHAR(255)
);

INSERT INTO songs (title, artist, preview_url, cover_url) VALUES
('Blinding Lights', 'The Weeknd', 'https://cdns-preview-5.dzcdn.net/stream/c-xyz.mp3', 'https://e-cdns-images.dzcdn.net/images/cover/xyz.jpg');
