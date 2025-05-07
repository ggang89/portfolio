import { NotionAPI } from "notion-client";
import Notion from "../app/components/notion";

const notion = new NotionAPI();

export default async function Home() {
  const pageId = process.env.NOTION_PAGE_ID as string;

  if (!pageId) {
    return <div>Notion page ID 가 없습니다.</div>;
  }

  try {
    const recordMap = await notion.getPage(pageId);
    console.log(recordMap);
    return <Notion recordMap={recordMap} />;
  } catch (error) {
    console.error("Error fetching Notion page:", error);
    return <div>Notion 페이지를 가져오는 중 오류가 발생했습니다.</div>;
  }
}
