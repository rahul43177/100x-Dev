const express=  require('express')
const app = express()

app.use(express.json())

const users = [{
    name : "John"  ,
    kidneys : [{
        healthy : false
    }]
}]


app.get('/dataOfKidneys' , (req,res)=> {
    
    const johnKidneys = users[0].kidneys;
    const totalKidneys = johnKidneys.length;

    let healthyKidneys = 0
    for(let i = 0;i<totalKidneys;i++) {
        if(johnKidneys[i].healthy) {
            healthyKidneys++
        }
    }
    let unhealthyKidneys = totalKidneys - healthyKidneys;
    res
    .status(200)
    .send({
        johnKidneys ,
        healthyKidneys,
        unhealthyKidneys
    })
})

app.post('/' , (req,res)=> {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "DONE"
    })
})

app.put('/makeItHealthy' , (req,res)=>{
    for(let i = 0;i<users[0].kidneys.length;i++) {
        users[0].kidneys[i].healthy = true
    }
    return res.json({msg : "Made it healthy"})
})

app.delete("/deleteUnhealthy" , function(req,res){
    let healthyKidneys  = []
    for(let i = 0;i<users[0].kidneys[i].length;i++) {
        if(users[0].kidneys[i].healthy) {
            healthyKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = healthyKidneys;
    res.json({status : "Deleted" , message : "Deleted the unhealthy kidneys" , data : healthyKidneys})
})

app.listen(3000 , ()=> {
    console.log(`The server is running on port 3000`)
})