export default function isValidJSON(str) {
  try {
    let json = JSON.parse(str);
    return json;
  } catch(e) {
    return false;
  }
}
