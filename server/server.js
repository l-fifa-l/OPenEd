import express from 'express';
import cors from 'cors';
const morgan = require('morgan')
const dotenv = require('dotenv');
dotenv.config();
import { readdirSync } from 'fs';

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
