import { useState, useEffect } from "react";
// API
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

export function useMovieFetch(movieId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setErr(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
      } catch (error) {
        setErr(true);
      }
      setLoading(false);
    }
    const sessionState = isPersistedState(movieId);
    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchData();
  }, [movieId]);

  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, err };
}
