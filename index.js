const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const binRouter = require('./routes/bins_routes');

app.get('/', (req, res) => {
  response.send('<h1>Hello World</h1>');
});

app.use('/api/bin', binRouter)

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is up and running on ${PORT}`);
});