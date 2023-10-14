/*
  Warnings:

  - The `progress` column on the `ShoppingList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ShoppingList" DROP COLUMN "progress",
ADD COLUMN     "progress" TEXT NOT NULL DEFAULT 'ACTIVE';

-- DropEnum
DROP TYPE "Progress";
