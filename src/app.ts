import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const route = require('./routes/index.route');
dotenv.config({path: 'src/config/.env'});

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',route);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});