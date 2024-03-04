import { Sequelize } from "sequelize";

// Replace with your actual database credentials
export const DB = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});
