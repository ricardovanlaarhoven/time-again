import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { app } from './firebase';

const db = getDatabase(app);
if (location.hostname === "127.0.0.1") {
  // Point to the RTDB emulator running on localhost.
  connectDatabaseEmulator(db, "localhost", 9000);
  console.log("localhost db")
}
export const realtimeDatabase = db;
