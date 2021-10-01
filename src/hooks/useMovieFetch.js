import { useState, useEffect } from "react";
// API
import API from "../API";

export function useMovieFetch(movieId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     setErr(false);
  //     const movie = await API.fetchMovie(movieId);
  //     const credits = await API.fetchCredits(movieId);
  //     const directors = credits.crew.filter(
  //       (member) => member.job === "Director"
  //     );
  //     setState({
  //       ...movie,
  //       actors: credits.cast,
  //       directors,
  //     });
  //   } catch (error) {
  //     setErr(true);
  //   }
  //   setLoading(false);
  // };

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
    fetchData();
  }, [movieId]);

  return { state, loading, err };
}
