//--basic function----
function sayHello() {
    console.log("Hello, welcome to my learning hub!");
}

//---calling the function---
sayHello();

//--function with parameters---
function deployToRegion(region) {
    console.log(`deploying to region, ${region}!`);
}

//---calling the function with parameters---
deployToRegion('us-west-2');

//--cloud service function---
function deployCloudService(service) {
    console.log(`deploying ${service}...`);
}
//---calling the function with parameters---
deployCloudService('EC2');
//---function with return value---
function calculateSum(a, b) {
    return a + b;
}


