//variable let and const
//let is used to declare a variable that can be reassigned

function deployResources(isProduction) {
    let region = 'eu-west-2';//production region
   
    console.log(`Deploying production in ${region} environment.`);

    console.log('setting up monitoring in ${region}...');

    }

    deployResources(true);//deploy for production
    deployResources(false);//deploy for development

    

