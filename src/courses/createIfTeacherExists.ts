import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const result = await prisma.courses.create({
    data: {
      description: "Curso para aprender a programar java",
      duration: "200",
      name: "Curso de Java 12",
      teacher: {
        connect: {
          id: "3f2ee5bd-c1d5-42f1-9b42-8cde975d409a"
        }
      }
    }
  });

  console.log(result)
}

main();