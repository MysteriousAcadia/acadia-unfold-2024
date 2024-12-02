import React from "react";

function SetupBot() {
  const [gameName, setGameName] = React.useState("BlackJack");
  const [gameDescription, setGameDescription] = React.useState(
    "A classic card game where players try to get a hand value closer to 21 than the dealer without going over."
  );
  const [prompt, setPrompt] = React.useState("");
  const [timesToPlay, setTimesToPlay] = React.useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement Play button logic
    console.log(
      `Play ${gameName} with prompt "${prompt}" ${timesToPlay} times`
    );
  };

  return (
    <div>
      <h1>AI Agent Instructions</h1>
      <h2 className="text-2xl mt-8 font-bold">{gameName}</h2>
      <p className="text-gray-300">{gameDescription}</p>

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="prompt"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Prompt
          </label>
          <textarea
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="timesToPlay"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Number of times to play
          </label>
          <input
            type="number"
            id="timesToPlay"
            name="timesToPlay"
            value={timesToPlay}
            onChange={(e) => setTimesToPlay(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Play
        </button>
      </form>
    </div>
  );
}

export default SetupBot;
