-- DropIndex
DROP INDEX "users_license_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "license" DROP DEFAULT;
