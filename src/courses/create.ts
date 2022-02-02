import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  const result = await prisma.courses.create({
    data: {
      description: "Curso para aprender a programar elixer",
      duration: "200",
      name: "Curso de Elixer",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Ivo Vi"
          },
          create: {
            name: "Ivo vi"
          }
        }
      }
    }
  });

  console.log(result)
}

main();