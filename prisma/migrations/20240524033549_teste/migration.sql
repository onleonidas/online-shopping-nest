/*
  Warnings:

  - You are about to drop the column `adminId` on the `Catalog` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Catalog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Catalog" ("createdAt", "description", "id", "name") SELECT "createdAt", "description", "id", "name" FROM "Catalog";
DROP TABLE "Catalog";
ALTER TABLE "new_Catalog" RENAME TO "Catalog";
PRAGMA foreign_key_check("Catalog");
PRAGMA foreign_keys=ON;
