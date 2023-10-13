-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CANCELLED', 'COMPLETED', 'ACTIVE');

-- AlterTable
ALTER TABLE "ShoppingList" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';
