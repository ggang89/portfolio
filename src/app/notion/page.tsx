import Notion from "../components/notion";
import "react-notion-x/src/styles.css";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default async function getData() {
  const recordMap= await notion.getPage(
    "Front-end-developer-1e75be88695680a6844cff9572157c32"
  );
  console.log("recordMap",recordMap);
   return <Notion recordMap={recordMap}/>;
 
}


