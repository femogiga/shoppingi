/*
  Warnings:

  - Changed the type of `count` on the `ShoppingListOnProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ShoppingListOnProduct" DROP COLUMN "count",
ADD COLUMN     "count" INTEGER NOT NULL;
