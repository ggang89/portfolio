'use client'
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // 코드 하이라이팅
import 'katex/dist/katex.min.css'; // 수식


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