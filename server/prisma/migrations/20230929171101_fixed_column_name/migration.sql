/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_categoryName_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "categoryName",
ADD COLUMN     "category_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productName",
ADD COLUMN     "product_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");
