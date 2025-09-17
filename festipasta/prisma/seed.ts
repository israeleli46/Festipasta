// prisma/seed.ts
import { prisma } from "../lib/prisma";
import { hash } from "bcryptjs";

async function main() {
  const password = await hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@festipasta.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@festipasta.com",
      password,
      role: "admin",
    },
  });

  console.log("Seed terminé ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
