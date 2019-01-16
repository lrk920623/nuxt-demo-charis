export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    $axios.setHeader('Content-Type', 'application/json', ['post'])
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)

    console.log(error)

    // if (code !== 200) {
    //   redirect('/error')
    // }
  })

  $axios.onResponse(response => {
    console.log(response)
  })
}
