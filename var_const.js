//variavle const
//const is used to declare a variable that cannot be reassigned

const API_endpoint = 'https://api.example.com';
console.log(API_endpoint);
// API_endpoint = 'https://api.example2.com'; // This will throw an error

//configuration management
const AWS_REGION = 'us-west-2';
const MAX_RETRIES = 5;
const DYNAMOB_TABLE = 'my-table';

function fetchUserData(userId) {
    const url = `${API_endpoint}/users/${userId}`;
    console.log(`Fetching data from ${url}`);
    // Fetch data logic here
    //use theses contants in the AWS SDK
}

//------security-------
const API_KEY = process.env.API_KEY;
API_KEY = 'new-key'; // This will throw an error

//------PREVENTING BUGS--------
const LAMBDA_TIMEOUT_MS = 3000; // 3 seconds
function configureLambda(functionName) {
    LAMBDA_TIMEOUT_MS = 3000; // ERROR!
    
    // Lambda configuration logic here
}

