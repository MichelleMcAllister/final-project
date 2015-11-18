var eventsPage = function () {

};

eventsPage.prototype.fetchProducts = function (verb, query){
  return this.request(verb, query);

};

eventsPage.prototype.request = function(verb,path,options){

    return new Promise(function(resolve,reject){

      var xhr = new XMLHttpRequest();
      var params = {};
      var hasParams = false;
      var id = "102635752";
      //var access_token = "QLtkefYaBSfbP*s90jHn!8%E4khF76fNQAUAGA@r7f&hBIqoH%kM!UWyS#Peg&gR";  /* INSERT TOKEN HERE */
      xhr.open(verb, "https://public-api.wordpress.com/rest/v1/sites/" + id + "/"+path, true);
      //xhr.setRequestHeader( 'Authorization', 'BEARER ' + access_token );
      xhr.send();
    //  console.log("https://public-api.wordpress.com/rest/v1/sites/" + id + "/"+path);
      xhr.onreadystatechange = function() {

        if (xhr.readyState == 4) {

          if(xhr.status === 401){
            resp = xhr.responseText;
            resolve(resp);
          }
          if (xhr.status === 200) {
            try{

              var resp = JSON.parse(xhr.responseText);
            }
            catch(error){
              resp = xhr.responseText;
            }
            resolve(resp);
          }
          else{
            resolve(xhr);
          }
        }
      };


if(options !== undefined && options.constructor.name ==='Object'){
  params ={};
  for (var property in options) {
    if (options.hasOwnProperty(property)){
      params[property]= optons[property];
      hasParams= true;
    }
  }
}

if(hasParams === true){
  xhr.send(JSON.stringify(params));
}
//else{
//  xhr.send();
})
};
;
