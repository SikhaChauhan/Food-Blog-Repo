const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const cors = require('cors');
const ItemRoutes = require('./src/routes/itemRoutes');
const CategoryRoutes = require('./src/routes/categoryRoute');
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Foodeasy');
  app.get('/', (req, res) => {
    res.send('Foodeasy server is running!');
  })
};

main().then(()=> console.log("Mongodb connected successfully!")).catch(err => console.log(err));

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes);

app.listen(port, (req,res)=>{
    console.log(`Server started on port ${port}`);
});


