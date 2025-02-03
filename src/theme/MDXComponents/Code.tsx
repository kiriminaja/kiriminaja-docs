import type { ComponentProps, JSX } from "react";
import * as React from "react";
import CodeInline from "@theme/CodeInline";
import type { Props } from "@theme/MDXComponents/Code";
function shouldBeInline(props: Props) {
  return (
    typeof props.children !== "undefined" &&
    React.Children.toArray(props.children).every(
      (el) => typeof el === "string" && !el.includes("\n")
    )
  );
}

function CodeBlock(props: ComponentProps<"code">): JSX.Element {
  return <code {...props} />;
}
export default function MDXCode(props): JSX.Element {
  return shouldBeInline(props) ? (
    <CodeInline {...props} />
  ) : (
    <CodeBlock {...props} />
  );
}
