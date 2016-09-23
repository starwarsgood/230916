var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
console.log(date.toLocaleString());
/////////////////////////////////////////////////////
var mobs = "[0, 1, 2, 3]";
mobs = JSON.parse(mobs);
console.log ( mobs[1] );
/////////////////////////////////////////////////////
o = new Object();
myVar = o.valueOf();
console.log(o.valueOf());