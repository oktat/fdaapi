import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Worker) {
    await db.Worker.bulkCreate([
      { id: 1, name: "Csuma Géza", email: "csuma@valahol", entryDate: "2025-01-01", positionId: 1 },
      { id: 2, name: "Per Elemér", email: "per@valahol", entryDate: "2025-02-01", positionId: 1 },
      { id: 3, name: "Szecső Ferenc", email: "szecso@valahol", entryDate: "2025-02-01", positionId: 1 },
      { id: 4, name: "Puma Nándor", email: "puma@valahol", entryDate: "2025-03-01", positionId: 1 },
      { id: 5, name: "Las Istávn", email: "las@valahol", entryDate: "2025-03-01", positionId: 1 },
    ]);
  }else {
    await QueryInterface.bulkInsert('workers', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('workers');
}

export { up, down }
