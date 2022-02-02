import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findFirst({
    // Retorna o ultimo registro criado na tabela
    take: +1,
  })
  
  console.log(result)
}

main();