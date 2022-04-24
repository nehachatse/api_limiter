const express =  require("express")
const rateLimit =  require("express-rate-limit")

const app = express()
let count = 0;

app.use(
    
    rateLimit({
      windowMs: 60000, // 2 minutes duration in milliseconds
      max: 10,
      message: "You exceeded 10 requests in 1 minute limit!",
      headers: true,
    })

    
  );

app.get("/", (req, res) => {
    count++
  
    if(count > 10){
        count = 0;
    } 
    res.json({message: `Api request count : ${count}`})
})
app.listen(8000, () => {
    console.log("server staarted on port 8000")
})