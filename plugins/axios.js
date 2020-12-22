export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });

  $axios.onError(error => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message
    });
    return Promise.resolve(false);
  });
  $axios.onResponse(response => {});
  $axios.onRequestError(error => {});
  $axios.onResponseError(error => {});
}
