export function coordsValidate (str) {
  let result = str.match(/-?\d{2,3}\.\d*/gm);
  if (result && result.length === 2) {
    return {
      lat: +result[0],
      lon: +result[1]
    }
  }

  return false;
}
