import process from "process";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Log users in the database.
  const users = await prisma.user.findMany();
  console.log("Users:");
  console.log(users);

  // Add a new user to the database.
  const newUser = await prisma.user.create({
    data: {
      email: "jay@example.org",
      name: "Jay",
      posts: {
        create: { title: "Hello world." },
      },
    },
  });

  // Log the updated users, alongside profile and posts.
  const updatedUsers = await prisma.user.findMany({
    include: { posts: true, profile: true },
  });
  console.log(updatedUsers);
}

// Handle errors in prisma.
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
