const pool = require('./db');

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    console.log('連線成功，測試結果:', rows[0].result);
  } catch (err) {
    console.error('資料庫連線失敗:', err);
  }
}

testConnection();
