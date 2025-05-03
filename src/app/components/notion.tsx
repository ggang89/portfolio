'use client'
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";


interface Props{
  recordMap: ExtendedRecordMap;
}

export default function Notion({recordMap}: Props) { 

  return (
    <NotionRenderer
      recordMap={recordMap}
    fullPage/>
  )
}