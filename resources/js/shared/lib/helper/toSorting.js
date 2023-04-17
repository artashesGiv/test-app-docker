export const toSorting = (list, name, direction) => {
  return list.sort((a, b) => a[name] > b[name] ? direction[0] : direction[1])
}
