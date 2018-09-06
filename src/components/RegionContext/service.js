export default function fetchRegion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 100,
        specials: [
          {
            id: 100,
            text: 'Free Drink with Calzone'
          }
        ],
        deliveryTime: 30
      })}, 2000);
  });
}
