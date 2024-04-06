"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function StarWarsCharacter() {
  const [character, setCharacter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://swapi.dev/api/people/1/");
        setCharacter(response.data);
      } catch (error) {
        setError("Something went wrong");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="character">
      <h2>{character.name}</h2>
      <p>
        <span>Birth Year:</span> {character.birth_year}
      </p>
      <p>
        <span>Height:</span> {character.height}
      </p>
      <p>
        <span>Gender:</span> {character.gender}
      </p>
    </div>
  );
}
