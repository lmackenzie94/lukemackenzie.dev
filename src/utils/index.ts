import readingTime from 'reading-time';

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

// e.g. "3 min read" — computed from the raw markdown body
export const getReadingTime = (markdown: string = '') =>
  readingTime(markdown).text;
