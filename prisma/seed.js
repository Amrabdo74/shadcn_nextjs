const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create( {
        data: {
            email: 'prisma0@example.com',
            name: 'prisma0',
            address: {
              city: 'San Francisco',
              state: 'CA',
              street: 'San Francisco Street',
              zip: ' san Francisco + 1',
            }
        }
    })
  // ... you will write your Prisma Client queries here
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })