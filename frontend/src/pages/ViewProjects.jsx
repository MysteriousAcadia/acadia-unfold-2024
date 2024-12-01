import React from "react";
import { Link } from "react-router-dom";

function ViewProjects() {
  const [games, setGames] = React.useState([
    {
      name: "BlackJack",
      description:
        "A classic card game where players try to get a hand value closer to 21 than the dealer without going over.",
      chain: "SUI",
      address:
        "0x1e3a4600f06fe3784ec40e9c8e8e3028d23173b343dfb7f7867d193b0a4fc55a",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "A classic paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid.",
      chain: "Aptos",
      address: "0x1234567890abcdef1234567890abcdef1234567890",
    },
    {
      name: "Chess",
      description:
        "A strategic board game for two players, played on a checkered board with 64 squares.",
      chain: "Aptos",
      address: "0x9876543210fedcba9876543210fedcba9876543210",
    },
    {
      name: "Checkers",
      description:
        "A strategy board game for two players, played on a checkered board with 64 squares.",
      chain: "SUI",
      address: "0xabcdef1234567890abcdef1234567890abcdef123456",
    },
    {
      name: "Go",
      description:
        "A complex strategy board game for two players, played on a 19×19 grid.",
      chain: "SUI",
      address: "0x90abcdef1234567890abcdef1234567890abcdef1234",
    },
    {
      name: "Othello",
      description:
        "A strategy board game for two players, played on an 8×8 board.",
      chain: "Polygon",
      address: "0xabcdef1234567890abcdef1234567890abcdef12345",
    },
  ]);

  React.useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white text-gray-800 p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl  font-bold">{game.name}</h2>
            <p className="my-2">{game.description}</p>
            <p className="my-2">{game.chain}</p>
            <p className="my-2">
              {game.address.slice(0, 5)}....{game.address.slice(-5)}
            </p>
            <button
              onClick={() => {
                fetch(`http://localhost:3000/games/${game.id}/start-ai-agent`, {
                  method: "POST",
                })
                  .then((res) => res.json())
                  .then((data) => console.log(data));
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Deploy AI Agent
            </button>
          </div>
        ))}
      </div>
      <Link to={"/create-project"}>
        <button
          onClick={() => {
            // Implement the logic to add a new game/project
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto"
        >
          Add a new game / project
        </button>
      </Link>
    </div>
  );
}
export default ViewProjects;
