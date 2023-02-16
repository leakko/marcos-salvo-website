import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { db } from "~/utils/db.server";

export const loader = async () => {
  return json({
    technologies: await db.technology.findMany(),
  });
};

export default function IndexRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <h1>Technologies:</h1>
      <ul>
        {
          data.technologies.map(tech => (
            <li key={tech.id}>{tech.name}</li>
          ))
        }
      </ul>
    </>
  );
}