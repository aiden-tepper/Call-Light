accessToken1 = "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed";
deviceID1 = "243c200bfb71";
url1 = "https://api-http.littlebitscloud.cc/v2/devices/" + deviceID1 + "/output";

accessToken2 = "";
deviceID2 = "";
url2 = "https://api-http.littlebitscloud.cc/v2/devices/" + deviceID2 + "/output";

accessToken3 = "";
deviceID3 = "";
url3 = "https://api-http.littlebitscloud.cc/v2/devices/" + deviceID3 + "/output";

accessToken4 = "";
deviceID4 = "";
url4 = "https://api-http.littlebitscloud.cc/v2/devices/" + deviceID4 + "/output";

$("#button1").click(function(){
  console.log("clicked");
  $.post("http://api-http.littlebitscloud.cc/v2/devices/243c200bfb71/output", {power: 100, duration_ms: 5000}, function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});
