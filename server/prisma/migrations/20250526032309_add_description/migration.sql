-- CreateEnum
CREATE TYPE "SpeciesTypes" AS ENUM ('gato', 'cachorro', 'porco', 'cavalo', 'ovelha', 'vaca');

-- CreateEnum
CREATE TYPE "AppointmentTypes" AS ENUM ('checkup', 'vacinacao', 'consulta', 'retorno');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "doctor" TEXT NOT NULL,
    "appointmentType" "AppointmentTypes" NOT NULL,
    "description" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

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
