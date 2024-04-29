export function saveUserCoordsInLocalStorage() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const { latitude, longitude } = data.coords;
        const obj = {
          lat: latitude,
          long: longitude
        }
        localStorage.setItem('crds', JSON.stringify(obj));
      },
      (err) => {throw new Error(err)},
      { enableHighAccuracy: true },
    );
  };
};
