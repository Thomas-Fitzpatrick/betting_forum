const axios = require("axios");
const appkey = "u3aNksQGhdXhGldb";
const baseurl = "https://api.betfair.com/exchange/betting/json-rpc/v1";
const ssid = "yDwPTsKdPYJd0m+LsHaINu0mvmx+LJOkYjKhR87a1xs=";

var options = {
  hostname: "api.betfair.com",
  port: 443,
  path: "/exchange/betting/json-rpc/v1",
  method: "POST",
  headers: {
    "X-Application": appkey,
    Accept: "application/json",
    "Content-type": "application/json",
    "X-Authentication": ssid,
  },
};

const makeRequest = async (datatype, parameters) => {
  const jsonreq = getJsonRequest(datatype, parameters);
  try {
    res = await axios.post(baseurl, jsonreq, options);
    return res.data;
  } catch (err) {
    return [];
  }
};

const getJsonRequest = (operation, parameters) => {
  return {
    jsonrpc: "2.0",
    method: "SportsAPING/v1.0/".concat(operation),
    params: parameters,
  };
};

module.exports = { makeRequest };
