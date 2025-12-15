import { load, save, STATE_KEYS } from "./state.js"

export function isLogged() {
  return load(STATE_KEYS.AUTH, false)
}

export function login() {
  save(STATE_KEYS.AUTH, true)
}

export function logout() {
  save(STATE_KEYS.AUTH, false)
}
