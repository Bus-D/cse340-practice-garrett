// ---------- Imports ----------
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- Important Variables --------
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//EJS as templating Engine
app.set('view engine', 'ejs');
// Where to find templates
app.set('views', path.join(__dirname, 'src/views'));

const name = process.env.NAME;

//Global template variables middleware

app.use((req, res, next) => {
  res.locals.NODE_ENV = NODE_ENV.toLowerCase() || 'production';

  next();
})

// ---------- Routes ----------
app.get('/', (req, res) => {
  const title = 'Express Application Home';
  res.render('home', { title });
});

app.get('/about', (req, res) => {
  const title = 'About Me';
  res.render('about', { title });
});

app.get('/products', (req, res) => {
  const title = 'Our Products';
  res.render('products', { title});
});

app.get('/students', (req, res) => {
  const title = 'Student List';
  res.render('students', { title });
})

// ---------- Start the Server ----------
if (NODE_ENV.includes('dev')) {
  const ws = await import('ws');

  try {
    const wsPort = parseInt(PORT) +1;
    const wsServer = new ws.WebSocketServer({ port: wsPort });

    wsServer.on('listening', () => {
      console.log(`WebSocket server is running on port ${wsPort}`);
    });

    wsServer.on('error', (error) => {
      console.error('WebSocket server error:', error);
    });
  } catch(error) {
    console.error('Failed to start WebSocket server:', error);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});