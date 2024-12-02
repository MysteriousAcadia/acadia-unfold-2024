require("dotenv").config();
const axios = require("axios");

async function makeRequest(requestMessage) {
  try {
    let data = JSON.stringify({
      model: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
      messages: [
        {
          role: "user",
          content: requestMessage,
        },
      ],
    });
    console.log(data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dev.beyondnetwork.xyz/api/chat/completions",
      headers: {
        "x-api-key": process.env.BEYOND_API,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response;
  } catch (error) {
    console.log(error);
  }
}

makeRequest(
  "You're playing a game of blackjack. Your prompt is: Always maximize the chances of winning. These are the following moves that have been already played Dealer: [2,4] Player: [7,8]. You're supposed to suggest the next move for the player, to either Deal or Give up. Just reply with the next move"
);
makeRequest(
  "You're playing a game of blackjack. Your prompt is: Always maximize the chances of winning. These are the following moves that have been already played Dealer: [2,4] Player: [7,8,2]. You're supposed to suggest the next move for the player, to either Deal or Give up. Just reply with the next move"
);
makeRequest(
  "You're playing a game of blackjack. Your prompt is: Always maximize the chances of winning. These are the following moves that have been already played Dealer: [2,4] Player: [7,8,2,3]. You're supposed to suggest the next move for the player, to either Deal or Give up. Just reply with the next move"
);
