// converts an array into another array which elements are subarrays of length groupSize
export const createSubArrays = (array, groupSize) => {
  const copyArray = array.slice()
  const groupQty = Math.ceil(array.length / groupSize)
  const resultArray = []

  for (let i = 0; i < groupQty; i++) {
    let group = copyArray.splice(0, groupSize)
    resultArray.push(group)
  }

  return resultArray
}

export const decodeHTMLCharacters = string => {
  const el = document.createElement('textarea')
  el.innerHTML = string
  return el.value
}

export const updateObject = (object, ...properties) => Object.assign({}, object, ...properties)
