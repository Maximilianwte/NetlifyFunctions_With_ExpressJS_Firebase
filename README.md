# Netlify Functions Example with Vue.js, Express.js, Firebase-SDK
This implementation shows you how to run netlify functions with Firebase and a frontend tool like Vue.js. For Firebase to work with netlify it is important to have the function zipped. That works by storing it in a seperate folder and creating it's own package.json.

## Instructions:
1. To get Netlify functions to work with Firebase-SDK create the function in a specific folder named as the function. If you need more than one lambda function, create multiple folders.
2. Run npm init in the folder of the function and npm install all required dependencies. If you created multiple functions, run npm init and npm install in all function folders.
3. Copy the netlify.toml and package.json from the root folder.
4. Push the files to netlify, the "dist" folder will contain the frontend, the ".netlify/functions" folder will contain all build functions.

## Notes:
The structure will not work if netlify lambda is installed, because the folder structure is unknown to netlify lambda.