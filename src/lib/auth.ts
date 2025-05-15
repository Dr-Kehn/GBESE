import axios from "axios";

const fetchToken = async () => {
  const data = await axios.get("/api/token");
  return data
};
export default fetchToken;




