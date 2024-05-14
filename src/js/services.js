export function coordsValidator (coords) {
  const  [lat, lon] = coords.replaceAll(' ', '').split(',');
  const latBool = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(lat);
  const lonBool = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(lon);

  return latBool && lonBool;
}


export function dateFormatter (timestamp) {

  const date = new Date(timestamp);

  // some date formatring

  return date;

}
