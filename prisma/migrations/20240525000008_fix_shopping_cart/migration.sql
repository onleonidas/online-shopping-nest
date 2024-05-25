/*
  Warnings:

  - You are about to drop the column `quantity` on the `ShoppingCart` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ShoppingCart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" TEXT NOT NULL,
    CONSTRAINT "ShoppingCart_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ShoppingCart" ("clientId", "id") SELECT "clientId", "id" FROM "ShoppingCart";
DROP TABLE "ShoppingCart";
ALTER TABLE "new_ShoppingCart" RENAME TO "ShoppingCart";
PRAGMA foreign_key_check("ShoppingCart");
PRAGMA foreign_keys=ON;
