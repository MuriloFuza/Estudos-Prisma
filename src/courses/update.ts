import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
  const result  = await prisma.courses.update({
    where: {
      id: "fe604c1c-6b30-422b-9c30-cd426a979d72",
    },
    data: {
      duration: "300"
    }
  })

  console.log(result)
}

main()