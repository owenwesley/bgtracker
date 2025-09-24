const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/bgtracker', require('./routes/bgtracker'));
app.use('/users', require('./routes/users'));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  app.use(express.static('client/build'));

  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // Related path
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // Related path
  });
}

app.listen(port, () => {
  console.log(`BGTracker server listening on port ${port}`);
});
