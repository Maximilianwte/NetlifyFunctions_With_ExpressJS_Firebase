# Netlify Functions Example with Vue.js, Express.js, Firebase-SDK
This implementation shows you how to run netlify functions with Firebase and a frontend tool like Vue.js. For Firebase to work with netlify it is important to have the function zipped. That works by storing it in a seperate folder and creating it's own package.json.

## Instructions
1. To get Netlify functions to work with Firebase-SDK create the function in a specific folder named as the function.
2. Run npm init in the folder of the function and npm install all required dependencies.
3. Copy the netlify.toml and package.json from the root folder.

## Notes:
The structure will not work if netlify lambda is installed, because the folder structure is unknown to netlify lambda.