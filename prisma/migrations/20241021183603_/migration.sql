-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('NEW', 'USED', 'REFURBISHED');

-- CreateEnum
CREATE TYPE "Segment" AS ENUM ('ACCESSORIES', 'RUBBERSHOP', 'ELECTRICAL', 'LIGHTING', 'BODYWORK', 'ENGINE', 'SUSPENSION');

-- CreateEnum
CREATE TYPE "Line" AS ENUM ('LIGHT', 'HEAVY');

-- CreateEnum
CREATE TYPE "SearchStatus" AS ENUM ('OPEN', 'ANSWERED', 'ABANDONED', 'UNANSWERED', 'CANCELED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "contact" BOOLEAN NOT NULL DEFAULT true,
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sellers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "segment" "Segment"[],
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "condition" "Condition" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sellers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "searchs" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "line" "Line" NOT NULL,
    "license" TEXT NOT NULL,
    "segment" "Segment" NOT NULL DEFAULT 'ACCESSORIES',
    "condition" "Condition" NOT NULL,
    "observation" TEXT,
    "status" "SearchStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expirationTime" TIMESTAMP(3),

    CONSTRAINT "searchs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sellers_cpf_key" ON "sellers"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "sellers_email_key" ON "sellers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "sellers_cnpj_key" ON "sellers"("cnpj");
