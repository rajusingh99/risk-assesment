const express = require('express');
const cors = require('cors');
const {dbConnect} = require('./src/Config/db')
const authRoute = require('./src/Routes/auth');
const scenarioRoute = require('./src/Routes/scenario');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser)
const corsDetail = {
    origin: 'http://localhost:4000',
    Credential:true
};

app.use(cors(corsDetail));
app.get('/',(req,res) => {
    return res.status(200).json({
        success:true,
        msg:'Default Route'
    })
})

app.use('/api',authRoute)
app.use('/api',scenarioRoute);
    
app.listen(port, () => console.log(`Server running on PORT ${port}`));


// http://localhost:4000/api/register