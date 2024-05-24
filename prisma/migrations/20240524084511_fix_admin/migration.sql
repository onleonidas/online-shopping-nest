/*
  Warnings:

  - The primary key for the `Manages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Admin` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Manages" (
    "adminId" TEXT NOT NULL PRIMARY KEY,
    "catalogId" INTEGER NOT NULL,
    CONSTRAINT "Manages_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Manages_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Manages" ("adminId", "catalogId") SELECT "adminId", "catalogId" FROM "Manages";
DROP TABLE "Manages";
ALTER TABLE "new_Manages" RENAME TO "Manages";
CREATE TABLE "new_Admin" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Admin" ("userId") SELECT "userId" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");
PRAGMA foreign_key_check("Manages");
PRAGMA foreign_key_check("Admin");
PRAGMA foreign_keys=ON;
