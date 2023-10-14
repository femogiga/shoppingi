/*
  Warnings:

  - You are about to drop the column `status` on the `ShoppingList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ShoppingList" DROP COLUMN "status",
ADD COLUMN     "progress" TEXT NOT NULL DEFAULT 'ACTIVE';
