export default function ({ $axios, redirect }) {
  // Set baseURL (both client and server)
  // $axios.setBaseURL('https://randomuser.me/api')

  // Change URL only for client
  // if (process.client) {
  //   $axios.setBaseURL('https://randomuser.me/api')
  // }

  // Change URL only for server
  if (process.server) {
    $axios.setBaseURL('https://randomuser.me/api')
  }

  $axios.onRequest((config) => {
    console.log('axios onRequest')
    // console.log(`Making request to ${config.url}`)
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
