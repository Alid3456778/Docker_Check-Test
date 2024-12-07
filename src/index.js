const app = require('express')();

app.get('/',(req,res)=>
    res.json({message: ' Docker Is easy '})
);

const port = process.env.PORT || 8080 ;

app.listen(port , ()=> console.log(`App is Listening on http://localhost:${port}`));