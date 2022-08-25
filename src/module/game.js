const getScores = async (url) => {
  const response = await fetch(`${url}`).then((response) => response.json());
  return response.result;
};

const setScores = async (url, user, score) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
  return response;
};

module.exports = { getScores, setScores };
