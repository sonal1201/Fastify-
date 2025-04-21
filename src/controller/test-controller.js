const testCheck = require("../service/test-service");

async function pingCheck(req,res){
    console.log("hqlo")
    const response = await testCheck.testC();

    res.send({data: response})
 }

 module.exports = {pingCheck}