-- CreateTable
CREATE TABLE "ShoppingList" (
    "id" SERIAL NOT NULL,
    "listName" TEXT NOT NULL,

    CONSTRAINT "ShoppingList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingListOnProduct" (
    "productId" INTEGER NOT NULL,
    "shoppingListId" INTEGER NOT NULL,

    CONSTRAINT "ShoppingListOnProduct_pkey" PRIMARY KEY ("productId","shoppingListId")
);

-- AddForeignKey
ALTER TABLE "ShoppingListOnProduct" ADD CONSTRAINT "ShoppingListOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingListOnProduct" ADD CONSTRAINT "ShoppingListOnProduct_shoppingListId_fkey" FOREIGN KEY ("shoppingListId") REFERENCES "ShoppingList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
