import React, { useState } from 'react';
import axios from 'axios';

const VisitShortUrl = () => {
  const [shortUrl, setShortUrl] = useState('');

  const handleVisit = async (e) => {
    e.preventDefault();
    try {
      // Construct the URL with the actual short URL value
      const url = `https://gotinyy.onrender.com/${shortUrl}`;
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Redirect the user to the long URL
      console.log('Response:', response);
      window.location.href = response.data.longurl;
      
    } catch (error) {
      console.error('Error visiting short URL:', error);
    }
  };

  return (
    <div>
      <h2>Visit Short URL</h2>
      <form onSubmit={handleVisit}>
        <input
          type="text"
          placeholder="Enter short URL"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button type="submit">Visit</button>
      </form>
    </div>
  );
};

export default VisitShortUrl;
