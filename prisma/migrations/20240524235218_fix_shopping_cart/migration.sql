-- CreateTable
CREATE TABLE "CartItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productId" INTEGER NOT NULL,
    "shoppingCartId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CartItem_shoppingCartId_fkey" FOREIGN KEY ("shoppingCartId") REFERENCES "ShoppingCart" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ShoppingCart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "ShoppingCart_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ShoppingCart" ("clientId", "id", "productId", "quantity") SELECT "clientId", "id", "productId", "quantity" FROM "ShoppingCart";
DROP TABLE "ShoppingCart";
ALTER TABLE "new_ShoppingCart" RENAME TO "ShoppingCart";
CREATE UNIQUE INDEX "ShoppingCart_productId_key" ON "ShoppingCart"("productId");
PRAGMA foreign_key_check("ShoppingCart");
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_productId_key" ON "CartItem"("productId");
