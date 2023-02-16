import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getTechnologies().map((technology) => {
      return db.technology.create({ data: technology });
    })
  );
}

seed();

function getTechnologies() {

  return [
    {
      name: 'JavaScript',
      icon: 'https://drive.google.com/file/d/1PNFJu7ecrj0CZSzPhIu3mU5JBDkURXSm/view?usp=share_link',
      documentation: 'https://developer.mozilla.org/es/docs/Web/JavaScript' 
    },
    {
        name: 'Angular',
        icon: 'https://drive.google.com/file/d/19PqxnHWJfKo3zeqIfzpk4C-hvODFyC8A/view?usp=share_link',
        documentation: 'https://angular.io/' 
      },
  ];
}