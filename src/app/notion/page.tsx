import Notion from "../components/notion";
import "react-notion-x/src/styles.css";
import { NotionAPI } from "notion-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notion resume",
  description: "박선영 Notion page",
};
export const revalidate = 0;

const notion = new NotionAPI();

export default async function getData() {
  const recordMap = await notion.getPage(process.env.NOTION_PAGE_ID as string);

  return <Notion recordMap={recordMap} />;
}
