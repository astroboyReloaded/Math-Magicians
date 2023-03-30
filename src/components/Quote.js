import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const API_KEY = 'oNaTrFfgL5OH2S52NR+xew==tPr1dJuqTaePURP8';
    const category = 'knowledge';
    const fetchQuote = async () => {
      setIsLoading(true);
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
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, []);

  return (
    <section className="quoteContainer">
      {isLoading && 'Loading..'}
      {hasError && 'Ups! Something went wrong...'}
      {quote}
    </section>
  );
};

export default Quote;
