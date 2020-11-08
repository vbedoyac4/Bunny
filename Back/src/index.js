const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const flash = require('connect-flash');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());
app.use(cors())
app.options('*', cors());


// Routes
app.use('/users',require('./routes/users'));
app.use('/tasks',require('./routes/tasks'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {  console.log('Server on port', app.get('port'));
});