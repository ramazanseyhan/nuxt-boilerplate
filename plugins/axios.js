export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log(`Making request to ${config.url}`)
  })

  $axios.onError((error) => {
    // eslint-disable-next-line no-undef
    nuxtError({
      message: error.message,
      statusCode: error.response.status
    })
    return Promise.resolve(false)
  })
  $axios.onResponse((response) => {
    console.log(response)
  })
  $axios.onRequestError((error) => {
    console.log(error)
  })
  $axios.onResponseError((error) => {
    console.log(error)
  })
}
