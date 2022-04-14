const axios = require('axios').default;

async function getRandomAdvice() {
  const response = await axios.get('https://api.adviceslip.com/advice');
  return response.data.slip;
}

export { getRandomAdvice };
