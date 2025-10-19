const get = (key: string) => {
  return localStorage.getItem(key)
}

const set = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

const remove = (key: string) => {
  localStorage.removeItem(key)
}

const clear = () => {
  localStorage.clear()
}

const ls = {
  get,
  set,
  remove,
  clear,
}

export default ls