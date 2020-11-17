const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
    //stripe
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51HkZHyL3uqxLO4xh6zBIZYwJuZxX9s2ruyIBsdkbbWtwtd5H3Sw5fGQzj7GBQiwoPiPRbWbnq0wlCVKoH8joChYL00YLVnws8L");

//Config .env to ./config/config.ev
require('dotenv').config({
    path: './config/config.env'
})

const app = express();

// Connect to database
connectDB();

//Use bodyParse
app.use(bodyParser.json())

//config for only development
// Dev Logginf Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
        //morgan give information about each request
        //cors its allow to deal with react for localhost at port 3000 without any problem
}

// Load routes
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')
const stripeRouter = require('./routes/stripe.route')
const turnosRouter = require('./routes/turno.route')

// Use Routes
app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', turnosRouter)
    //stripe route
app.use('/api', stripeRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});