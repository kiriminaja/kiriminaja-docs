import * as React from "react";
import type { Props } from "@theme/MDXComponents/Pre";

export default function MDXPre(props: Props): React.ReactNode | undefined {
  return <pre {...props} />;
}