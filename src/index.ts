import { App } from './app'
import { IndexRoutes } from './routes/index.routes'

const app = new App([new IndexRoutes()])

app.listen()
