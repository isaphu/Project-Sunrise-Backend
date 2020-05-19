const db = require('./models');
const express = require('express');
const app = express();

const contact_usRoutes = require('./routes/contact_us')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/contact_us', contact_usRoutes)




db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    });
});