const db = require('./models');
const express = require('express');
const app = express();

const contact_usRoutes = require('./routes/contact_us');
const loginRoutes = require('./routes/login');
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/contact_us', contact_usRoutes)
app.use('/login', loginRoutes)
app.use('./post', postRoutes)
app.use('./user', userRoutes)



db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
});

