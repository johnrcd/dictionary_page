/**
 * Displays the amount of times the user has searched with the dictionary.
 *
 * @param {number} searches
 */
export default function SearchCounter({ searches }) {
  const isPlural = searches !== 1;
  const message = `You have used this dictionary ${searches} ${
    isPlural ? "times. " : "time."
  }`;

  const colorBoxStyle = {
    backgroundColor: `rgba(120, 178, 255, ${Math.min(searches / 50, 255)} `
  };
  return (
    <div className="searchCounter">
      <p>{message}</p>
      <div className="colorBox" style={colorBoxStyle}>
        The more searches you do, the more colourful this box gets!
      </div>
    </div>
  );
}
