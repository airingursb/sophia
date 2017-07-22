import storage from 'good-storage'

const TOKEN_KEY = '__token__'

export function saveToken(token) {
  storage.set(TOKEN_KEY, token)
  return token
}

export function loadToken() {
  return storage.get(TOKEN_KEY, [])
}
