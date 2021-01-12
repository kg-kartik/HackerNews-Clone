//Standalone script
//Here db is not conencted to the server

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Used for querying the database
const main = async () => {
    const newLink = await prisma.link.create({
        data: {
            description: "Kartik's Portfolio",
            url: "https://kg-kartik.github.io",
        },
    });
    const allLinks = await prisma.link.findMany();
    console.log(allLinks);
};

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
