/*
const config = {
  database: 'postgres',
  host: 'notes-app-db.csn03upvfavb.us-east-1.rds.amazonaws.com',
  port: '5432',
  user: 'postgres',
  password: 'admin123',
  debug: true
};
*/
const config = {
  database: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  debug: true,
};
const PgConnection = require('postgresql-easy');
const pg = new PgConnection(config);
export default pg;
