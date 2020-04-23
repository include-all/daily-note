var startTime=window.performance.now();
console.log('setTimeoutstart',startTime);
setTimeout(()=>{
    console.log('setTimeoutcallback,consuming:'+(window.performance.now()-startTime)+'ms');
},1000);
console.log('sortstart');
var sum = function(a,b){
    return Number(a)+Number(b);
};
var res=[];
for(var i=0; i < 50000000; i++){
    var a = Math.floor(Math.random()*100);
    var b = Math.floor(Math.random()*200);
    res.push(sum(a,b));
}
res = res.sort();
console.log('sortend');