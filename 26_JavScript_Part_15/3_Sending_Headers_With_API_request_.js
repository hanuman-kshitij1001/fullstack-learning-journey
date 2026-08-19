// Axios
// Sending Headers

const config = {headers: { Accept: "application/json" } };
let res  = await axios.get(url2, config);
console.log(res.data);