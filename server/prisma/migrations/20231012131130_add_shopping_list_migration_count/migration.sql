/*
  Warnings:

  - Added the required column `count` to the `ShoppingListOnProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingListOnProduct" ADD COLUMN     "count" TEXT NOT NULL;
