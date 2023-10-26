const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = require('./app');
dotenv.config({ path: `${__dirname}/config.env` });


mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => console.log(`Connection Success`))
.catch((err) => console.log(err));

const port = process.env.PORT

app.listen(port, ()=>console.log(`Server listen on port ${port}`))


