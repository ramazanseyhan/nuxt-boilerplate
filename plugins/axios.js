export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.log(`Making request to ${config.url}`)
  })

  $axios.onError((error) => {
    nuxtError({
      message: error.message,
      statusCode: error.response.status
    })
    return Promise.resolve(false)
  })
  $axios.onResponse((response) => {})
  $axios.onRequestError((error) => {})
  $axios.onResponseError((error) => {})
}
