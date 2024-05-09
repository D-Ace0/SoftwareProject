const express = require('express');
const app = express();

require('dotenv').config();
const connectDB = require('./connection/conn')
const productsRoutes = require('./routes/product');
const ordersRoutes = require('./routes/orders')
const login = require('./routes/login')
const register = require('./routes/register')

app.use(express.json())


app.use('/api/v1/login', login)
app.use('/api/v1/register',register)
 app.use('/api/v1/product', productsRoutes);
app.use('/api/v1/order', ordersRoutes);

const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () =>
        console.log(`Server is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
start();
  