import { useState } from "react";
import SearchBar from "./container/SearchBar";
import WordDefinition from "./presentation/WordDefinition";
import SearchCounter from "./presentation/SearchCounter";
import Footer from "./presentation/Footer";
import "./styles.css";

export default function App() {
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [searches, setSearches] = useState(0);

  function handleSearch(input) {
    fetchApi(input);
    setSearches(searches + 1);
  }

  async function fetchApi(word) {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    let result = await fetch(url);
    let response = await result.json();
    outputData(response[0]);
  }

  function outputData(data) {
    if (data == undefined) {
      setWord(`Could not find word in the dictionary.`);
      setPhonetic("Did you misspell it?");
      setMeanings([]);
      return;
    }

    const newWord = data.word;
    const newPhonetic =
      data.phonetic === undefined
        ? "no pronunciation available"
        : data.phonetic;
    const newMeanings = data.meanings;

    setWord(newWord);
    setPhonetic(newPhonetic);
    setMeanings(newMeanings);
  }

  return (
    <div className="App">
      <h1>dictionary website</h1>
      <h2>i can find word meaning</h2>
      <SearchBar handleSearch={handleSearch} />
      <WordDefinition word={word} phonetic={phonetic} meanings={meanings} />
      <SearchCounter searches={searches} />
      <Footer />
    </div>
  );
}
