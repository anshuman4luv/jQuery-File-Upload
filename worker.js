/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
self.onmessage = function(event) {
    console.log("Inside worker.js file --------->");
    console.log(event.data);
    getAllChats();
}

 function getAllChats()
                {
                    console.log("Inside get all chats");
                    //app.appName("      CHATS");
                   // self.datasource([]);
                   
                   var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    console.log("success");
    postMessage(data);
    
  }
});

xhr.open("GET", "https://ucf1-fap0844-osn.oracledemos.com/osn/social/api/v1/socialObjects?offset=0&count=999",true);
//xhr.setRequestHeader("cache-control", "no-cache");
//xhr.setRequestHeader("postman-token", "115408ad-cf1a-0617-62ad-ff27cc7684a6");

xhr.send(data);
                   
                   
                   
                   
//                    $.ajax({
//                        url: 'https://ucf1-fap0844-osn.oracledemos.com/osn/social/api/v1/socialObjects?offset=0&count=999',
//                        method: 'GET',
//                        headers: {
//                            'accept-encoding': 'gzip,deflate',
//                            'Content-Type': 'application/json'
//                        },
//                        crossDomain: true,
//                        // data: JSON.stringify(data),
//                        success: function (data) {
//                            //console.log("app.app name is --> " + app.appName());
//                            console.log("getallChats.success: ");
//                            console.log(data);
//                            //var localStorageName = "getallChats"+"##"+app.loggedInUser();
//                            //console.log("localStorageName--->"+localStorageName);
//                            //window.localStorage.setArray(localStorageName, data);                                                    
//                            console.log("Value of local --->");
//                            //console.log(window.localStorage.getArray(localStorageName, data));
//                   
//                       //  gatheredPosts = window.localStorage.getArray("cachedPosts");
//
//                            // def.resolve(data);
//                            postMessage(data);
////                            for (i = 0; i < data.items.length; i++) {
////
////                               // getMembers(data.items[i].membersURL, data.items[i].messagesURL, data.items[i].id, data.items[i].name);
////                            }
//
//                        },
//                        error: function (data) {
//                            console.log("getallChats.Error: " + data);
//                            console.log(data);
//                            //self.sessionID = -1;
//                            //def.reject(data);
//                        }
//
//                    });
                }
                