/**
 * Displays a word with it's definition.
 * @param {string} word The word whose definition is being displayed.
 * @param {string} phonetic The phonetic spelling of the word.
 * @param {Array} meanings The meanings of the word.
 */
export default function WordDefinition({ word, phonetic, meanings }) {
  return (
    <div>
      <h2>{word}</h2>
      <h3>{phonetic}</h3>
      <ol>
        {meanings.map((x, index) => (
          <li key={"meanings_index_" + index}>
            <h4>{x.partOfSpeech}</h4>
            <ul>
              {x.definitions.map((y, i) => (
                <li key={"definition_index_" + i}>
                  <p>{y.definition}</p>
                  <p>{y.example}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
