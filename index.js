const express = require('express');
const app = express();
const cors = require('cors');
require('./config/mongo');

app.use(cors());
app.use(express.json());

const recordRoutes = require('./routes/record_routes');
const hookRoutes = require('./routes/hook_routes');

app.use('/api', recordRoutes);       
app.use('/', hookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});