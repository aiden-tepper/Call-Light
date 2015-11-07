
var tenant1 = {
  name: "Melanie",
  accessToken : "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "243c200bfb71" + "/output"
};

var tenant2 = {
  name: "Nina",
  accessToken : "",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "" + "/output"
};

var tenant3 = {
  name: "Lauren",
  accessToken : "",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "" + "/output"
};

var tenant4 = {
  name: "Julie",
  accessToken : "",
  url : "https://api-http.littlebitscloud.cc/v2/devices/" + "" + "/output"
};



var temp = {
  "percent": 100,
  "duration_ms": 5000
};

var postdata = JSON.stringify({
  "percent": 100,
  "duration_ms": 5000
});



function post(tenant) {

  console.log("Clicked on " + tenant.name);

  $.ajax({

    url: tenant.url,
    type: "post",
    dataType: "json",

    data: postdata,

    headers: {
      "Accept": "application/vnd.littlebits.v2+json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tenant.accessToken
    },

    // beforeSend: function(jqXHR) {
    //   console.log("JQXHR: \n\n" + JSON.stringify(jqXHR));
    // },

    // success: function(result, status, xhr){
    //   console.log("Result: \n" + JSON.stringify(result) + "\n\nStatus: " + status + "\n\nXHR: \n" + JSON.stringify(xhr));
    // },

    // error: function(xhr, status, error){
    //   console.log("XHR: \n" + JSON.stringify(xhr) + "\n\nStatus: " + status + "\n\nError: " + error);
    // }

    success: function() {
      $("#modaltitle").text("Success!");
      $("#modalbody").text(tenant.name + " has been notified of your arrival. She will meet with you shortly.");
      $("#modal").modal();
    },

    error: function(xhr, status, error) {
      $("#modaltitle").text("Uh oh!");
      $("#modalbody").text("Something went wrong! Try again, and if this message persists, please take a seat and wait patiently.");
      $("#modal").modal();
    }

  });

}
