import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv'
import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import userRoutes  from './routes/user';
import contactRoutes from './routes/contact';
import smsRoutes from './routes/sms'
import authMiddleware from './middleware/auth';
import parametersMiddleware from './middleware/validators';

const swaggerDocument = YAML.load('./swagger.yml')
// initialize dot env
dotenv.config();

// default api path
const apiPath = '/api/v1'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(`${apiPath}/auth`, parametersMiddleware, authRoutes)
app.use(`${apiPath}/user`, authMiddleware, parametersMiddleware, userRoutes);
app.use(`${apiPath}/contacts`, authMiddleware, parametersMiddleware, contactRoutes)
app.use(`${apiPath}/sms`, authMiddleware, parametersMiddleware, smsRoutes)

export default app;