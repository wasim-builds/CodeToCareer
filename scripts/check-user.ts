
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Checking database connection...');
    try {
        const users = await prisma.user.findMany();
        console.log(`Found ${users.length} users:`);
        users.forEach((user: any) => {
            console.log(`- ${user.email} (ID: ${user.id}, Name: ${user.name})`);
        });
    } catch (e) {
        console.error('Error fetching users:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
