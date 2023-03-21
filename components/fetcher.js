import path from "path";
import { promises as fs } from "fs";

export default async function fetcher() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const showCollection = JSON.parse(fileContents);

  return showCollection;
}
