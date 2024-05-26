const fs = require('fs');
const path = require('path');

const folderPath = `../../Kettenfördersystem-VarioFlow-plus`;



// Function to read all JSON files in a directory
function readJSONFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return console.error('Failed to list directory contents:', err);
        }

        

        const productList=files.filter((file)=>path.extname(file) === '.json'&&file.startsWith('list'))
        console.log(productList)
        const productCategory=productList.reduce((acc,curr)=>{
            const listPath=path.join(directory, curr)
            const listContent=JSON.parse(fs.readFileSync(listPath))[0]['category'].split('/')
            const {category,parentCategory}={
                category:listContent[listContent.length-1],
                parentCategory:listContent[listContent.length-2]
            }
            acc.push({category,parentCategory})
            return acc
        },[])
        console.log(productCategory)

    });
}

// Call the function with your folder path
readJSONFiles(folderPath);
