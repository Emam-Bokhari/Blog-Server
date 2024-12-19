import express from 'express';
import cors from 'cors';
import { router } from './app/routes';


const app = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

// check server health
app.use('/', (req, res) => {
  res.send('Server is running...');
});

export default app;
