accessToken = "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed";
deviceID = "243c200bfb71";
url = "https://api-http.littlebitscloud.cc/v2/devices/" + deviceID + "/output";

rgbtest = function(){
  http.post(url, {percent:100, duration_ms:4000});
};
