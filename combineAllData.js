const fs = require('fs');
const path = require('path');

const folderPath = `Montagetechnik_Kettenfoerdersystem-VarioFlow-plus_VarioFlow-plus-Aluminiumsystem_Strecke-AL-Gleitleiste`;

let allProducts=[]
let originalKeyProducts=[]

// Function to read all JSON files in a directory
function readJSONFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return console.error('Failed to list directory contents:', err);
        }

        files.forEach((file,index) => {
                if (path.extname(file) === '.json') {
                    const filePath = path.join(directory, file);
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            return console.error('Failed to read file:', filePath, err);
                        }
    
                        try {
                            const jsonData = JSON.parse(data);
                            if(Array.isArray(jsonData)){
                                return
                            }
                            
                                // Helper function to convert a string to camelCase
function toCamelCase(str) {
    return str
        .toLowerCase() // Convert the string to lowercase
        .split(' ') // Split the string into an array by spaces
        .map((word, index) => {
            if (index === 0) {
                return word; // First word is all lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of the subsequent words
        })
        .join(''); // Join the array back into a single string
}

// Function to convert object keys to camelCase
function convertKeysToCamelCase(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelCaseKey = toCamelCase(key);
            newObj[camelCaseKey] = obj[key];
        }
    }
    return newObj;
}



const camelCaseObject = convertKeysToCamelCase(jsonData);


// Helper function to replace specific characters in a string with '-'
function replaceCharacters(str) {
    // return str.replace(/[(),-\.]/g, '_');
    return str.replace(/\W/g, '_');
}

function addUnderscoreIfStartsWithNumber(str) {
    // Use a regular expression to check if the first character is a digit
    if (/^\d/.test(str)) {
        return '_' + str;
    }
    return str;
}

// Function to convert object keys by replacing specific characters
function convertKeys(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = replaceCharacters(key);
            newKey=addUnderscoreIfStartsWithNumber(newKey)
            if(newKey.length>63) newKey=newKey.slice(0, 63);
            newObj[newKey] = obj[key];
        }
    }
    return newObj;
}



const newObject = convertKeys(camelCaseObject);

                            

                            allProducts.push(newObject)
                            originalKeyProducts.push(jsonData)
                            console.log(allProducts.length)
                            console.log(originalKeyProducts.length)
                            fs.writeFileSync(`${folderPath}_for_mysql.json`,JSON.stringify(allProducts))
                            fs.writeFileSync(`${folderPath}_original_key.json`,JSON.stringify(originalKeyProducts))

                        } catch (parseErr) {
                            console.error('Failed to parse JSON:', filePath, parseErr);
                        }
                    });
                }
        });

    });
}

// Call the function with your folder path
readJSONFiles(folderPath);
