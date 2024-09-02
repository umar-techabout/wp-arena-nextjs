import React from "react";
import SearchResultsComp from "../../components/SearchResultComp";
import { API_BASE_URL } from "@/apiConfig";

async function fetchAllData() {
  try {
    const endpoints = [`${API_BASE_URL}/posts`, `${API_BASE_URL}/pages`];
    const requests = endpoints.map((endpoint) =>
      fetch(endpoint, { next: { revalidate: 3600 } }) // Cache for 1 hour
    );
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map(res => res.json()));
    return data.flatMap(items => items);
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw error;
  }
}

export default async function SearchResultPage({ searchParams }) {
  const query = searchParams.query || "";
  let allData = [];
  let error = null;

  try {
    allData = await fetchAllData();
  } catch (err) {
    console.error("Error in SearchResultPage:", err);
    error = "Failed to fetch data";
  }

  return <SearchResultsComp allData={allData} initialQuery={query} error={error} />;
}