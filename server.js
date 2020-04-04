const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

connectDB();
app.get('/ola', (req, res) => {
    res.send('OLA')
})
// commenting for prod deployment
//app.get('/', (req, res) => res.send('API running'));

//Init middleware
app.use(express.json({extended: false}));

//Define routes
app.use('/api/help_users', require('./routes/api/help_users'));
app.use('/api/vol_users', require('./routes/api/vol_users'));
app.use('/api/help_profiles', require('./routes/api/help_profiles'));
app.use('/api/vol_profiles', require('./routes/api/vol_profiles'));
app.use('/api/auth', require('./routes/api/auth'));

// serve static assets in prod
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));


