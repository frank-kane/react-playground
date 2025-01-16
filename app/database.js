import sqlite3 from 'sqlite3';
import { open } from 'sqlite3';

export async function getDatabase() {
  const db = await open({
    filename: './my_database.db', // Path to the database file
    driver: sqlite3.Database,
  });
  return db;

}  

  export async function addQuestToDatabase(title, description) {
    const db = getDatabase(); // or `await getDatabase()` if using `sqlite3`
    const index = db.prepare('SELECT COUNT(*) as count FROM quests').get().count + 1; // For `better-sqlite3`
    const stmt = db.prepare('INSERT INTO quests (index, title, description) VALUES (?, ?, ?)');
    stmt.run(index, title, description);
    return { index, title, description };
  }


  export async function deleteQuestFromDatabase(index) {
    const db = getDatabase();
    const stmt = db.prepare('DELETE FROM quests WHERE index = ?');
    stmt.run(index);
    return index;
  }