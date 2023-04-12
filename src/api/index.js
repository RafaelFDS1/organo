const fetchApi = async () => {
  const promise = await fetch("http://localhost:3000/colaborators");
  const data = await promise.json();
  return data;
};

const addColaborator = async (valores, colaborators) => {
  console.log(JSON.stringify({ id: colaborators.length, ...valores }));
  const promise = await fetch("http://localhost:3000/colaborators", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ id: colaborators.length, ...valores }),
  });
  const res = await promise.json();
  return res;
};

export const conectaApi = {
  fetchApi,
  addColaborator,
};
