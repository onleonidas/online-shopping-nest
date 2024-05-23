/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Address_clientId_key" ON "Address"("clientId");
