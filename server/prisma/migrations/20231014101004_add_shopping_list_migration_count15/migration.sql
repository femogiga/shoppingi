/*
  Warnings:

  - The `progress` column on the `ShoppingList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Progress" AS ENUM ('CANCELLED', 'COMPLETED', 'ACTIVE');

-- AlterTable
ALTER TABLE "ShoppingList" DROP COLUMN "progress",
ADD COLUMN     "progress" "Progress" NOT NULL DEFAULT 'ACTIVE';
