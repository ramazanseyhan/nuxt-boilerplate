export default function ({ $axios, $config, redirect }) {
  // Set baseURL (both client and server)
  // $axios.setBaseURL($config.baseURL)

  // Change URL only for client
  // if (process.client) {
  //   $axios.setBaseURL($config.baseURL)
  // }

  // Change URL only for server
  if (process.server) {
    $axios.setBaseURL($config.baseURL)
  }

  $axios.onRequest((config) => {
    console.log('axios onRequest')
  })
  $axios.onError((error) => {
    console.log('axios onError')
    // eslint-disable-next-line no-undef
    nuxtError({
      message: error.message,
      statusCode: error.response.status
    })
    return Promise.resolve(false)
  })
  $axios.onResponse((response) => {
    console.log('onResponse')
    // console.log(response)
  })
  $axios.onRequestError((error) => {
    console.log(error)
  })
  $axios.onResponseError((error) => {
    console.log(error)
  })
}
