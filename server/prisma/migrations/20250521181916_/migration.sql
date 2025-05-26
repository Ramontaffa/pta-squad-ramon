/*
  Warnings:

  - You are about to drop the column `petId` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the `Pet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `patientId` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_petId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "petId",
ADD COLUMN     "patientId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Pet";

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tutorName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "species" "SpeciesTypes" NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
