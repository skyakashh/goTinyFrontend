import React, { useState } from 'react';
import axios from 'axios';

const ShortenForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://gotinyy.onrender.com', { longurl: longUrl }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setShortUrl(response.data.shorturl);
      setLongUrl(''); // Clear the input field after successful submission
    } catch (error) {
      setError('Error shortening URL');
    }
  };

  return (
    <div>
      <h2>Shorten URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ShortenForm;
