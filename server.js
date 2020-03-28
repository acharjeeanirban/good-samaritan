const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();
app.get('/ola', (req, res) => {
    res.send('OLA')
})
app.get('/', (req, res) => res.send('API running'));

//Init middleware
app.use(express.json({extended: false}));

//Define routes
app.use('/api/help_users', require('./routes/api/help_users'))
app.use('/api/vol_users', require('./routes/api/vol_users'))
app.use('/api/help_profiles', require('./routes/api/help_profiles'))
app.use('/api/vol_profiles', require('./routes/api/vol_profiles'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));


