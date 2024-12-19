import express from 'express';
import cors from 'cors';
import { BlogRoutes } from './app/modules/Blog/blog.route';

const app = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/blogs", BlogRoutes)

// check server health
app.use('/', (req, res) => {
  res.send('Server is running...');
});

export default app;
