import { useState, useEffect } from "react";
// API
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export function useHomeFetch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setErr(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => {
        return {
          ...movies,
          results:
            page > 1
              ? [...movies.results, ...prev.results]
              : [...movies.results],
        };
      });
    } catch (error) {
      setErr(true);
    }
    setLoading(false);
  };

  // Search initial
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // Search term
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  return { state, loading, err, searchTerm, setSearchTerm };
}
