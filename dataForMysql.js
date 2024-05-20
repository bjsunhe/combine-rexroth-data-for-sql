const fs = require('fs');
const path = require('path');

const filePath = `./rexroth_high_precision_ball_runner_blocks_BSHP_for_mysql.json`;
const filePathOriginalKey = `./rexroth_high_precision_ball_runner_blocks_BSHP_original_key.json`;

let mysqlColumns={}
let mysqlColumnsComments={}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        return console.error('Failed to read file:', filePath, err);
    }

    try {
        const jsonData = JSON.parse(data);
        
        
        console.log(jsonData.length)
        mysqlColumns=jsonData.reduce((acc,curr)=>({...acc,...curr}),{})


        function createObjectWithEmptyValues(obj) {
            let newObj = {};
            for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                newObj[key] = '';
              }
            }
            return newObj;
          }

        let templateColumns=createObjectWithEmptyValues(mysqlColumns)
        console.log(templateColumns)
        let dataForMysql=jsonData.map(item=>({...templateColumns,...item}))

        fs.writeFileSync('rexroth_high_precision_ball_runner_blocks_BSHP_with_mysql_column_name.json',JSON.stringify(dataForMysql))



        

        

    } catch (parseErr) {
        console.error('Failed to parse JSON:', filePath, parseErr);
    }
});


fs.readFile(filePathOriginalKey, 'utf8', (err, data) => {
    if (err) {
        return console.error('Failed to read file:', filePath, err);
    }

    try {
        const jsonData = JSON.parse(data);
        
        
        mysqlColumnsComments=jsonData.reduce((acc,curr)=>({...acc,...curr}),{})


        function createObjectWithEmptyValues(obj) {
            let newObj = {};
            for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                newObj[key] = '';
              }
            }
            return newObj;
          }

        let templateColumnsComments=createObjectWithEmptyValues(mysqlColumnsComments)
        console.log(templateColumnsComments)
        



        

        

    } catch (parseErr) {
        console.error('Failed to parse JSON:', filePath, parseErr);
    }
});



