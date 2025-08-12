import { envConstants } from 'core/constants';
import cors from 'cors';

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  // IMPORTANT LIMIT HERE YOUR CLIENT APPS DOMAINS
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:8080',
      'http://localhost:8081',
      'https://codepaster.net',
      'https://www.codepaster.net',
    ];
    // Permitir peticiones sin origin (como Postman o curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  preflightContinue: false,
};

export const corsOptions = cors(options);