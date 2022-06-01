const request = require('postman-request');

const logger =require('./logger/loggerHandle')

const weatherapi = (req,res) =>{
    const value = req.body
    var city = value.value

    // const url = `http://api.weatherstack.com/current?access_key=bad13fb0c775be3f380ae5e9a27a6a91&query=${city}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=08e037b755a8abdb40d63544e92ee5bc&units=metric`


    request({ url: url }, (error, response, body) => {
        try{

            const data = JSON.parse(response.body)
            console.log("data", data);
            logger.info(body)

            console.log("city", city);

            if(city === "" || !data.name){
                res.send(data)
                console.log(data);
                throw new Error(data.message);
            }else{
                res.send(data)
            }

        }catch(err){
            console.log("err", err.message);
            logger.error("error",err.message)
            
        }
        

    })

}


module.exports = weatherapi