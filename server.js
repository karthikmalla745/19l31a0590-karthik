const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/numbers', (req, res) => {
    var obj={primes:[2, 3, 5, 7, 11, 13],fibo:[1, 1, 2, 3, 5, 8, 13, 21],odd:[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]}
    
    var k=['http://localhost:8090/primes','http://localhost:8090/odd','http://localhost:8090/fibo']

    var url= req.query.url
    var ans = {}
    var a= []
    url.map((i)=>{
        if(k.includes(i)){
            text=i.slice(22,)
            a=[...a,...obj[text]]
        }
    })
    d={}
        for (let i=0;i<a.length;i++)
        {
            d[a[i]]=1 
            
        }
        nl=[]
        for (var l in d){
            nl.push(parseInt(l))
        }
        var ob={numbers:nl}
        res.json(ob)

})


app.listen(3000, () => console.log("server listening at 3000"));


