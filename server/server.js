import express from 'express';
import cors from 'cors';
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

const csrfProtection = csrf({ cookie: true });

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));

//routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

//csrf
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
