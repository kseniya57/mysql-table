export default {
    connectionLimit: 1e2,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '12345678',
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'neirobet',
}