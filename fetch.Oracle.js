import axios from "axios";

export async function fetchPrice() {
  try {
    const res = await axios.get("https://api.reflector.network/oracle/kale-usd");
    return res.data.price; 
  } catch (err) {
    console.error("Error fetching oracle data:", err);
    return null;
  }
}
