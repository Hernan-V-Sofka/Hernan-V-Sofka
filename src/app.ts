import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
// Iniciazaciones
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`La API se encuentra en http://localhost:${app.get('port')}`);
});

export default app;