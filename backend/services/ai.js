const axios = require("axios");
let data = JSON.stringify({
  model: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
  messages: [
    {
      role: "user",
      content: "Your message here",
    },
  ],
});

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

async function makeRequest() {
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}

makeRequest();
