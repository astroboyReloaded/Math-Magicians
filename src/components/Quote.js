import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const API_KEY = 'oNaTrFfgL5OH2S52NR+xew==tPr1dJuqTaePURP8';
    const category = 'knowledge';
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            method: 'GET',
            headers: { 'X-Api-Key': API_KEY },
            contentType: 'application/json',
          },
        );
        const data = await response.json();
        setQuote(data[0].quote);
      }
    };
    fetchQuote();
  }, []);

  return <section className="quoteContainer">{quote}</section>;
};

export default Quote;
