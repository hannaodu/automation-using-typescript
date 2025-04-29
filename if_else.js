//---if/else statemnet-----
let cloudProvider = 'aws';

if (cloudProvider == 'aws') {
    console.log('You are using AWS');
} else if (cloudProvider == 'azure') {
    console.log('You are using Azure');
} else {
    console.log('You are using GCP');
}
//----if/else statememnt for terraform-----
let iacprovider = 'terraform';
if (iacprovider == 'terraform') {
    console.log('You are using terraform');
} else {
    console.log('You are using cloudformation');
}

