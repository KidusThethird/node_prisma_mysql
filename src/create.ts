import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  try {
    const res = await prisma.youtube_channels.createMany({
      data: [
        {
          name: "Abebe Kebede",
          description: "Software development things",
          subscribers: 500,
          link: "https://thisisatest/com",
        },
      ],
    });
  } catch (err) {
  } finally {
  }
}
