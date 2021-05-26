const express=require('express')

const app=express()

const bodyParser = require("body-parser");

const cors = require("cors");

var corsOptions = {
    origin: 'http://localhost:3000'
    }
  
  app.use(cors(corsOptions));
  

  app.use(bodyParser.json());
  

  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/',(req,res)=>{
    res.json({ message: "Welcome!" });
  })

  const db=require('./models')

db.sequelize.sync().then(() => {
    console.log('Drop and Resync Db');
    initial();
  });
  
  function initial() {
    Role.create({
      id: 1,
      name: "student"
    });
   
    Role.create({
      id: 2,
      name: "teacher"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

app.get('/',(req,res)=>{
    res.json({message:"Hello"})
})

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT=5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
