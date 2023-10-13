/*
  Warnings:

  - A unique constraint covering the columns `[listName]` on the table `ShoppingList` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShoppingList_listName_key" ON "ShoppingList"("listName");
