import storage from 'good-storage'

const TOKEN_KEY = '__token__'
const TIMESTAMP_KEY = '__timestamp__'
const UID_KEY = '__uid__'
const USER_KEY = '__user__'

export function saveToken(token) {
  storage.set(TOKEN_KEY, token)
  return token
}

export function loadToken() {
  return storage.get(TOKEN_KEY, [])
}

export function saveTimestamp(timestamp) {
  storage.set(TIMESTAMP_KEY, timestamp)
  return timestamp
}

export function loadTimestamp() {
  return storage.get(TIMESTAMP_KEY, [])
}

export function saveUid(uid) {
  storage.set(UID_KEY, uid)
  return uid
}

export function loadUid() {
  return storage.get(UID_KEY, [])
}

export function saveUser(user) {
  storage.set(USER_KEY, user)
  return user
}

export function loadUser() {
  return storage.get(USER_KEY, [])
}

export function clearCache() {
  return storage.clear()
}

