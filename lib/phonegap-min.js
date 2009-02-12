function Acceleration(a,c,b){this.x=a;this.y=c;this.z=b;this.timestamp=new Date().getTime()}function AccelerationOptions(){this.timeout=10000}function Accelerometer(){this.lastAcceleration=null}Accelerometer.prototype.getCurrentAcceleration=function(a,b,c){if(typeof a=="function"){var d=new Acceleration(_accel.x,_accel.y,_accel.z);Accelerometer.lastAcceleration=d;a(d)}};Accelerometer.prototype.watchAcceleration=function(a,b,c){this.getCurrentAcceleration(a,b,c);var d=(c!=undefined)?c.frequency:10000;return setInterval(function(){navigator.accelerometer.getCurrentAcceleration(a,b,c)},d)};Accelerometer.prototype.clearWatch=function(a){clearInterval(a)};if(typeof navigator.accelerometer=="undefined"){navigator.accelerometer=new Accelerometer()}function Media(a){this.src=a}Media.prototype.play=function(){};Media.prototype.pause=function(){};Media.prototype.stop=function(){};function MediaError(){this.code=null,this.message=""}MediaError.MEDIA_ERR_ABORTED=1;MediaError.MEDIA_ERR_NETWORK=2;MediaError.MEDIA_ERR_DECODE=3;MediaError.MEDIA_ERR_NONE_SUPPORTED=4;function Camera(){}Camera.prototype.getPicture=function(a,b,c){};if(typeof navigator.camera=="undefined"){navigator.camera=new Camera()}function Contact(){this.name="";this.phone="";this.address=""}Contact.prototype.get=function(a,b,c){};function ContactManager(){this.contacts=[]}ContactManager.prototype.get=function(a,b,c){};if(typeof navigator.contacts=="undefined"){navigator.contacts=new ContactManager()}function File(){this.data="";this.name=""}File.prototype.read=function(c,a,b){};File.prototype.write=function(a){};if(typeof navigator.file=="undefined"){navigator.file=new File()}function Geolocation(){this.lastPosition=null}Geolocation.prototype.getCurrentPosition=function(a,b,c){};Geolocation.prototype.watchPosition=function(a,b,c){this.getCurrentPosition(a,b,c);var e=(c!=undefined)?c.frequency:10000;var d=this;return setInterval(function(){d.getCurrentPosition(a,b,c)},e)};Geolocation.prototype.clearWatch=function(a){clearInterval(a)};if(typeof navigator.geolocation=="undefined"){navigator.geolocation=new Geolocation()}function Map(){}Map.prototype.show=function(a){};if(typeof navigator.map=="undefined"){navigator.map=new Map()}function Notification(){}Notification.prototype.blink=function(a,b){};Notification.prototype.vibrate=function(a){};Notification.prototype.beep=function(b,a){};if(typeof navigator.notification=="undefined"){navigator.notification=new Notification()}function Orientation(){this.lastOrientation=null}Orientation.prototype.getCurrentOrientation=function(a,b){};Orientation.prototype.watchOrientation=function(a,b){this.getCurrentPosition(a,b);return setInterval(function(){navigator.orientation.getCurrentOrientation(a,b)},10000)};Orientation.prototype.clearWatch=function(a){clearInterval(a)};if(typeof navigator.orientation=="undefined"){navigator.orientation=new Orientation()}function Position(g,b,e,f,a,c,d){this.latitude=g;this.longitude=b;this.accuracy=e;this.altitude=f;this.altitudeAccuracy=a;this.heading=c;this.velocity=d;this.timestamp=new Date().getTime()}function PositionOptions(){this.enableHighAccuracy=true;this.timeout=10000}function PositionError(){this.code=null;this.message=""}PositionError.UNKNOWN_ERROR=0;PositionError.PERMISSION_DENIED=1;PositionError.POSITION_UNAVAILABLE=2;PositionError.TIMEOUT=3;function Sms(){}Sms.prototype.send=function(e,d,a,b,c){};if(typeof navigator.sms=="undefined"){navigator.sms=new Sms()}function Telephony(){}Telephony.prototype.call=function(a){};if(typeof navigator.telephony=="undefined"){navigator.telephony=new Telephony()}File.prototype.read=function(c,a,b){document.cookie='bb_command={command:8,args:{name:"'+c+'"}}';navigator.file.successCallback=a;navigator.file.errorCallback=b;navigator.file.readTimeout=window.setInterval("navigator.file._readReady()",1000)};File.prototype._readReady=function(){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i].split("=");if(cookie[0]=="bb_response"){var obj=eval("("+cookie[1]+")");var file=obj.readfile;if(file!=null){window.clearTimeout(navigator.file.readTimeout);if(file.length>0){successCallback(file)}}}}};File.prototype.write=function(b,a){document.cookie='bb_command={command:9,args:{name:"'+b+'",data:"'+a+'"}}'};Geolocation.prototype.getCurrentPosition=function(a,b,c){document.cookie="bb_command={command:"+phonegap.LOCATION+"}";geoSuccessCallback=a;geoErrorCallback=b;geoOptions=c;locationTimeout=window.setInterval("navigator.geolocation._getCurrentPosition()",1000)};Geolocation.prototype._getCurrentPosition=function(successCallback,errorCallback,options){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=cookies[i].split("=");if(cookie[0]=="bb_response"){var obj=eval("("+cookie[1]+")");var geo=obj.geolocation;if(geo!=null){window.clearTimeout(locationTimeout);if(geo.error!=null){if(typeof geoErrorCallback=="function"){geoErrorCallback(new PositionError(geo.error))}}else{if(typeof geoSuccessCallback=="function"){geoSuccessCallback(new Position(geo.lat,geo.lng))}}break}}}};Geolocation.prototype.showMap=function(b,a){document.cookie="bb_command={command:1,args:{points:[{lat:"+b+",lng:"+a+",label:'Nitobi'}]}}"};Accelerometer.prototype.getCurrentAcceleration=function(a,b,c){if(typeof a=="function"){var d=new Acceleration(_accel.x,_accel.y,_accel.z);Accelerometer.lastAcceleration=d;a(d)}};Media.prototype.play=function(){if(this.src!=null){document.location="gap://playSound/"+this.src}};ContactManager.prototype.get=function(a,c,d){document.location="gap://getContacts/null";if(typeof a=="function"){for(var e=0;e<_contacts.length;e++){var b=new Contact();b.name=_contacts[e].name;b.phone=_contacts[e].phone;this.contacts.push(b)}}};Geolocation.prototype.getCurrentPosition=function(a,b,c){geoSuccessCallback=a;geoErrorCallback=b;geoOptions=c;locationTimeout=window.setInterval("Geolocation.prototype._getCurrentPosition();",1000)};Geolocation.prototype._getCurrentPosition=function(){document.location="gap://getloc/null";if(geo.lng!=0){window.clearTimeout(locationTimeout);if(geo.error!=null){if(typeof geoErrorCallback=="function"){geoErrorCallback(new PositionError(geo.error))}}else{if(typeof geoSuccessCallback=="function"){var a=new Position(geo.lat,geo.lng);Geolocation.lastPosition=a;geoSuccessCallback(a)}}}};Notification.prototype.vibrate=function(a){document.location="gap://vibrate/null"};Notification.prototype.beep=function(b,a){new Media("beep.wav").play()};