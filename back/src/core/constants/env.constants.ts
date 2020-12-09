export const envConstants = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    isMockRepository: process.env.MOCK_REPOSITORY === 'true',
    MONGODB_URI: process.env.MONGODB_URI,
    API_URL: process.env.API_URL,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    isProduction: process.env.NODE_ENV === 'production',
    STATIC_FILES_PATH: process.env.STATIC_FILES_PATH
  };
  
  