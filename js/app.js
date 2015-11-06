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

function post() {

  console.log("clicked");

  $.ajax({

    url: url1,
    type: "post",
    dataType: "json",

    data: {
      "power": 100,
      "duration_ms": 5000
    },

    headers: {
      "Accept": "application/vnd.littlebits.v2+json",
      "Content-Type": "application/json",
      "Authorization": "Bearer 4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed"
    },

    beforeSend: function(jqXHR) {
      console.log(jqXHR);
    },

    success: function(result, status, xhr){
      console.log("result: " + result + "\nStatus: " + status + "\nXHR:" + JSON.stringify(xhr));
    },

    error: function(xhr, status, error){
      console.log("XHR: " + JSON.stringify(xhr) + "\nStatus: " + status + "\nError: " + error);
    }

  });

}
