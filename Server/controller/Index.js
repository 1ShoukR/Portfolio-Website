const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3004;
const models = require('../sequelize/models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const store = new SequelizeStore({
    db: models.sequelize,
});
const userAccountInfoRoute = require('./Routes/usersAccountInfo')
const guestLoginRoute = require('./Routes/guestLogin')




// middleware
app.use(cookieParser());
app.use(
    session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: false,
        maxAge: 2592000000,
    },
    })
);
store.sync();
app.use(express.json());
app.use(cors());



//links for the webpages


app.use('/accountInfo', userAccountInfoRoute);
app.use('/guest_login', guestLoginRoute)


app.listen(PORT, console.log(`Listening on port ${PORT}`));
