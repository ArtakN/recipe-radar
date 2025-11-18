import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected and synced.🔌');
  } catch (error) {
    console.log('Database connection failed:', error);
    process.exit(1);
  }
}
