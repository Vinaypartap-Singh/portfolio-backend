-- CreateTable
CREATE TABLE "Header" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactBtnText" TEXT NOT NULL,
    "contactBtnUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Header_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL,
    "profileImageUrl" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "subHeadline" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroBtn" (
    "id" TEXT NOT NULL,
    "contactBtnText" TEXT NOT NULL,
    "contactBtnUrl" TEXT NOT NULL,
    "cvBtn" TEXT NOT NULL,
    "cvBtnUrl" TEXT NOT NULL,
    "githubText" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "linkedInText" TEXT NOT NULL,
    "linkedInUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HeroBtn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Header_name_key" ON "Header"("name");
