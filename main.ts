import { PrismaClient } from "./generated/prisma"

const prisma = new PrismaClient()   

async function main() {
    const user = await prisma.user.create({
        data: {
            name:'hasan',
            email: 'hasanbasri@email.com',
        },

    })
    console.log(user)
  }

  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })