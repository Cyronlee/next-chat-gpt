export default async function handler(req, res) {
  let response;
  try {
    response = await fetch('https://httpbin.org/status/429');
  } catch (error) {
    console.error('There was an error', error);
  }

  if (response?.ok) {
    res.json(response.body);
  } else {
    res.status(response?.status).json(response.body);
  }
}
