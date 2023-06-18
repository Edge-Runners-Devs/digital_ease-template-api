import { App } from './app';
import { AuthRoutes } from './routes/auth.routes';
import { IndexRoutes } from './routes/index.routes';

const app = new App([new IndexRoutes(), new AuthRoutes()]);

app.listen();
