// import { API_BASE_URL } from '../../apiConfig';
// import "./SearchBar.css"
// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchComponent = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchResults = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const endpoints = [
//         `${API_BASE_URL}/posts`,
//         `${API_BASE_URL}/pages`,
//       ];

//       // Fetch data from all endpoints
//       const requests = endpoints.map(endpoint => 
//         axios.get(endpoint, { params: { search: query } })
//       );
//       const responses = await Promise.all(requests);

//       // Combine results from all endpoints
//       const combinedResults = responses.flatMap(response => response.data);

//       setResults(combinedResults);
//     } catch (err) {
//       setError('Failed to fetch data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchResults();
//   };

//   return (
//     <div>

//              <div className="wpa-search-bar-input-wrapper wpa-flex wpa-content-center wpa-start-now-for-free">
//         <input type="text"  placeholder='Search' value={query} onChange={(e) => setQuery(e.target.value)} />
//         <button onClick={handleSearch}>search</button>
//       </div>


//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {results.length > 0 && (
//         <ul>
//           {results.map((item) => (
//             <li key={item.id}>
//               <a href={item.link}>{item.title.rendered}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchComponent;
