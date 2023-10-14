/*
  Warnings:

  - The `status` column on the `ShoppingList` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CANCELLED', 'COMPLETED', 'ACTIVE');

-- AlterTable
ALTER TABLE "ShoppingList" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';
