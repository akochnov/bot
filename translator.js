const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

exports.translate = async text => {

    //console.log(text);

    const data = JSON.stringify({
        "text": text
    });

    const config = {
        method: 'post',
        url: process.env.TRANSLATOR_URL+'?token='+process.env.SECRET,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };
    

    return axios(config)
    .then( response => response.data.russian)
    .catch( error => console.log(error));

}
