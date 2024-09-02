import axios from 'axios';
import { API_BASE_URL } from '@/apiConfig';

export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const endpoints = [`${API_BASE_URL}/posts`, `${API_BASE_URL}/pages`];
    const requests = endpoints.map(endpoint =>
      axios.get(endpoint, { params: { search: query } })
    );
    const responses = await Promise.all(requests);
    const combinedResults = responses.flatMap(response => response.data);

    res.status(200).json(combinedResults);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}