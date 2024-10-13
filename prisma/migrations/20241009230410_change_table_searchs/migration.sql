/*
  Warnings:

  - The primary key for the `searchs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id_user` to the `searchs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `license` to the `searchs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `searchs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `searchs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "searchs" DROP CONSTRAINT "searchs_pkey",
ADD COLUMN     "id_user" TEXT NOT NULL,
ADD COLUMN     "license" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "searchs_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "searchs_id_seq";
