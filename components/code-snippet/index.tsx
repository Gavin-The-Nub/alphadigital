// TODO: Replace with a local code block component or a third-party library
// import { CodeBlock } from "some-local-or-3rd-party-code-block";

import { CopyButton } from "./copy-button";
import { languagesIcons } from "./language";
import { FileIcon } from "@radix-ui/react-icons";
import s from "./code-snippet.module.css";

export type CodeSnippetProps = {
  code: { code: string; language: string };
  _id: string;
  _title?: string;
};

export function CodeSnippet({ code, _id, _title = "Untitled" }: CodeSnippetProps) {
  return (
    <div className={s["code-snippet"]}>
      {/* Replace with a real code block component as needed */}
      <pre className={s.content}>
        <code>
          {code.code}
        </code>
      </pre>
      <header className={s.header}>
        <div className="flex items-center">
          <span className="mr-2 size-4">
            {languagesIcons[code.language] ?? <FileIcon />}
          </span>
          <span className="text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {_title}
          </span>
        </div>
        <CopyButton code={code.code} />
      </header>
    </div>
  );
}

// const theme = ... // Remove theme for now
