import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

import routes from './routes/router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow requests from http://localhost:5173
// app.use(cors({
//   origin: 'http://localhost:5173/'
// }));

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 1, // `max` instead of `limit`
  message: "Too many requests from this IP"
});

app.use("/add", limiter);
app.use(routes);

app.listen(8080, () => {
  console.log("Server Connected");
});
