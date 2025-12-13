/*
  Warnings:

  - You are about to drop the column `brand` on the `Product` table. All the data in the column will be lost.
  - Added the required column `dimensions` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materials` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brand",
ADD COLUMN     "customization" TEXT,
ADD COLUMN     "dimensions" TEXT NOT NULL,
ADD COLUMN     "leadTime" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "materials" TEXT NOT NULL;
