import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const getData = (url) => {
  const { data, error } = useSWR(url, fetcher);

  if (error) {
    console.error('Error loading data:', error);
  }

  return data;
};

export default getData;