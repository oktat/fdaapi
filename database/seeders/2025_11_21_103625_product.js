import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Product) {
    await db.Product.bulkCreate([
      { id: 1, articleName: "a1235", name: "cpu", unitPrice: 58600, categoryId: 1 },
      { id: 2, articleName: "a1236", name: "CD-ROM", unitPrice: 8500, categoryId: 1 },
      { id: 3, articleName: "a1237", name: "memória", unitPrice: 22000, categoryId: 1 },
      { id: 4, articleName: "a1238", name: "billentyűzet", unitPrice: 6500, categoryId: 1 },
      { id: 5, articleName: "a1239", name: "egér", unitPrice: 3450, categoryId: 1 },
    ]);
  }else {
    await QueryInterface.bulkInsert('products', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('products');
}

export { up, down }
