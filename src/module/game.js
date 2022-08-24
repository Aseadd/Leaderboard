const getScores = async (url) => {
  const response = await fetch(`${url}`).then((response) => response.json());
  return response.result;
};

const setScores = async (url, data) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
  return response;
};

module.exports = { getScores, setScores };
