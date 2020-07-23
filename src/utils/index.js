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

export const decodeHTMLCharacters = (text) => {
  var entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"']
  ];

  for (var i = 0, max = entities.length; i < max; ++i) 
      text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

  return text;
}

export const updateObject = (object, ...properties) => Object.assign({}, object, ...properties)
