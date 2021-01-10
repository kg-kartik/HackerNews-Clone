const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
    const newLink = await prisma.link.create({
        data: {
            description: "Kartik's Portfolio",
            url: "https://kg-kartik.github.io",
        },
    });
    // console.log(newLink, "NEW");
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
