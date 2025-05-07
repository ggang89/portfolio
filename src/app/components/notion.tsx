"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import dynamic from "next/dynamic";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // 코드 하이라이팅
import "katex/dist/katex.min.css"; // 수식



interface Props {
  recordMap: ExtendedRecordMap;
}

export default function Notion({ recordMap }: Props) {
const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

  console.log("recordMap", recordMap);
  if (!recordMap) {
    return <div>recordMap 데이터가 없습니다.</div>;
  }
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      components={{
        Code,
        Collection,
        Equation,
        Modal,
        Pdf,
      }}
    />
  );
}
