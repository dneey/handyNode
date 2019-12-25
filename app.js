import express from 'express';
import routes from './routes/web';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);
app.listen(PORT, function() {});
