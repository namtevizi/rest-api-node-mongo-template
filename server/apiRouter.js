import express from 'express';
import ProductsRoute from './routes/products';
import ProductCategoriesRoute from './routes/productCategories';
import SitemapRoute from './routes/sitemap';
import SettingsRoute from './routes/settings';
import PagesRoute from './routes/pages';
import SecurityTokensRoute from './routes/tokens';
import RedirectsRoute from './routes/redirects';

const apiRouter = express.Router();

new ProductsRoute(apiRouter);
new ProductCategoriesRoute(apiRouter);
new SitemapRoute(apiRouter);
new SettingsRoute(apiRouter);
new PagesRoute(apiRouter);
new SecurityTokensRoute(apiRouter);
new RedirectsRoute(apiRouter);

export default apiRouter;
