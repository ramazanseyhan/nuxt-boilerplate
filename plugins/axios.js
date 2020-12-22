export default function({ $axios, redirect }) {
  // // Set baseURL (both client and server)
  // this.$axios.setBaseURL("http://api.example.com");
  // // Change URL only for client
  // if (process.client) {
  //   this.$axios.setBaseURL("http://api.example.com");
  // }
  // // Change URL only for server
  // if (process.server) {
  //   this.$axios.setBaseURL("http://api.example.com");
  // }

  $axios.onRequest(config => {
    console.log("Making request to " + config.url);
  });

  $axios.onError(error => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message
    });
    return Promise.resolve(false);
    // const code = parseInt(error.response && error.response.status);
    // if (code === 400) {
    //   redirect("/400");
    // } else if (code === 500) {
    //   redirect("/sorry");
    // }
  });
  $axios.onResponse(response => {});
  $axios.onRequestError(error => {});
  $axios.onResponseError(error => {});
}
