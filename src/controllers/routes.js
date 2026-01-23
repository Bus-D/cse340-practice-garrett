import { Router} from 'express';
import { addDemoHeaders } from '../middleware/demo/headers.js';
import { catalogPage, courseDetailPage } from './catalog/catalog.js';
import { homePage, aboutPage, demoPage, testErrorPage } from './index.js';

// New Router instance
const router = Router();

// TODO: add import statements for controllers and middleware
// TODO: add route definitions

// Home and Basic Pages
router.get('/', homePage);
router.get('/about', aboutPage);

// Course Catalog
router.get('/catalog', catalogPage);
router.get('/catalog/:courseId', courseDetailPage);

// Demo page
router.get('/demo', addDemoHeaders, demoPage);

// Test Error
router.get('/test-error', testErrorPage);

export default router;