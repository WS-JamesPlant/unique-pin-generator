import generateUniquePin from "./generator.js";

let existingPins = [];

function generatePins(count) {
  try {
    for (let i = 0; i < count; i++) {
      let newPin = generateUniquePin(existingPins);
      existingPins.push(newPin);
      console.log(`"${newPin}",`);
    }
  } catch (e) {
    console.error(e);
  }
  return existingPins;
}

generatePins(20);
console.log(`${existingPins.length} pins generated`);

export default generatePins;
