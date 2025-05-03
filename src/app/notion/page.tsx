import { NotionAPI } from "notion-client";
import Notion from "../components/notion";

const notion = new NotionAPI();

export default async function page() {
  
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string, );

  return 
  <Notion recordMap={recordMap}  />;
  
}