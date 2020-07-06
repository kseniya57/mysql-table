import MySQLProvider from 'mysql';
import util from 'util';
import dbConfig from '../config';

const pool = MySQLProvider.createPool(dbConfig);

pool.query = util.promisify(pool.query);
pool.queryRow = async (q, p) => (await pool.query(q, p))[0];
pool.format = (query, args) => MySQLProvider.format(query, args);
pool.selectFormat = (args, config) => {
    if (!config) {
        return pool
            .format('?', args)
            .replace(/=\s+NULL/gi, 'IS NULL')
            .replace(/,/g, ' AND ')
    }
    return Object.entries(args).map(([key, value]) => pool.format('?', { [key]: value }.replace('=', config[key] || '='))).join(' AND ').replace(/=\s+NULL/gi, 'IS NULL');
}

pool.query('SET NAMES utf8mb4');

export default pool;
