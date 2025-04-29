

//data type in javascript
//1---numbers----

const instanceCount = 5;
const cpuUtilization = 3.4;

console.log(typeof instanceCount); // number
console.log(typeof cpuUtilization); // number


//2---strings----
const region = 'us-west-2';
const errorMessage = 'Instance not found';
const logentry = 'deployemnt failed in ${region}: ${errorMessage}';

console.log(typeof regions);// // string

//3---booleans----
const isProduction = true;
const debugMode = false;

console.log(typeof isProduction)// // boolean
if (isProduction && !debugMode) {
    console.log('production mode');}

//4---undefined----
let congFile;
console.log(typeof congFile);// undefined
if(configFile === undefined){
    console.log('config file not found');

}

//5----null----
const cacheResult = null;
console.log(typeof cacheResult);// object
if (cacheResult === null) {
    console.log('cache is empty');
}



//6---object literals----
const ec2Instance ={
    instanceID: 'XXXXXXXXXXXXXXXXXXX',
    type: 't2.micro',
    state: 'running',
    lunchtime: null,
};

console.log(typeof ec2Instance);// object
console.log(ec2Instance.type);// t2.micro

//7---arrays----
const availableRegions = ['us-east-1', 'us-west-2', 'eu-central-1'];
console.log(typeof availableRegions);// output:object
console.log(Array.isArray(availableRegions));//output:true

availableRegions.forEach(region => {
    console.log('deploying to ${region}');
});











