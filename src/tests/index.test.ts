import request from 'supertest';
import { App } from '../app';
import { IndexRoutes } from '../routes/index.routes';

describe('INDEX ROUTES', () => {
  const indexRoutes = new IndexRoutes();
  const app = new App([indexRoutes]);
  describe('/healthcheck', () => {
    it('must responds with status 200', async () => {
      return await request(app.server)
        .get(`${indexRoutes.path}healthcheck`)
        .expect(200);
    });
  });
});
