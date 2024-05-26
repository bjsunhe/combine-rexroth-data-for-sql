const fs = require('fs');
const path = require('path');

const folderPath = `../../Kettenfördersystem-VarioFlow-plus`;



// Function to read all JSON files in a directory
function readJSONFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            return console.error('Failed to list directory contents:', err);
        }

        

        const productList=files.filter((file)=>path.extname(file) === '.json')
        const productCategory=productList.reduce((acc,curr)=>{
            const listContent=curr.split('.')[0].split('_')
            let categoryLink=''
            if(curr.split('.')[0].split('list_').length===2){

                categoryLink=`https://store.boschrexroth.com/${curr.split('.')[0].split('list_')[1].replace(/_/g, '/')}?cclcl=de_DE`
            }else{
                
                categoryLink=`https://store.boschrexroth.com/${curr.split('.')[0].split('list_')[0].replace(/_/g, '/')}?cclcl=de_DE`
            }
            const {category,parentCategory}={
                category:listContent[listContent.length-1],
                parentCategory:listContent[listContent.length-2],
            }
            acc.push({category,parentCategory,categoryLink})
            return acc
        },[])
        console.log(productCategory)
        fs.writeFileSync('product-category.json',JSON.stringify(productCategory))

    });
}

// Call the function with your folder path
readJSONFiles(folderPath);
