import axios from "axios";

const api = axios.create({
  baseURL: "https://obmennovosti.info/city.php",
  params: {
    city: 39, // Vinnytsia
  },
  headers: {
    // 'Access-Control-Allow-Origin': '*'

    // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
    // 'User-Agent': 'PostmanRuntime/7.28.4', // User-Agent string used by Postman
    //     'Accept': '*/*'
  }
});

export const getRates = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/")
      .then((response) => {
        console.log('success::: ', response)
        resolve(response);
      })
      .catch((error) => {
        console.log(
          `Failed to get Kit rates: `,
          error
        );
        reject(error);
      });
  });
};
