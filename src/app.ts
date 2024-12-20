import express from 'express';
import cors from 'cors';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';

const app = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

// check server health
app.use('/health', (req, res) => {
  res.send('Server is running...');
});

// global error handler
app.use(globalErrorHandler);

// not found route error handler
app.use(notFound);

export default app;
