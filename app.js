const express = require('express');

const morgan = require('morgan');

const globalErrorHandler = require('./utils/globalErrorHandler');

const AppError = require('./utils/appError');

const userRoutes = require('./routes/userRoutes');

const app = express();

// app.use(morgan('dev'))

app.use(express.json())


app.use('/users', userRoutes);



app.all('*', (req, res , next)=>{

    return next(new AppError('Not found route , please try valid one ', 404));
})

app.use(globalErrorHandler);





module.exports = app;