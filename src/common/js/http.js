export function get (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function post (url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: changeData(data)
    })
      .then(response => response.json())
      .then(result => {
        resolve(result)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function changeData (obj) {
  let prop = ''
  let str = ''
  let i = 0
  for (prop in obj) {
    if (!prop) {
      return
    }
    if (i === 0) {
      str += prop + '=' + obj[prop]
    } else {
      str += '&' + prop + '=' + obj[prop]
    }
    i++
  }
  return str
}
