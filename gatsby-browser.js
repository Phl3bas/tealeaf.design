import "@teal-ui/tokens";
import "@teal-ui/elements";
import "@teal-ui/css";
import { Store } from "./src/store";
import "./src/styles/index.css";

import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Oceanic from "prism-react-renderer/themes/oceanicNext";

/* eslint-disable */
const component = {
  pre: (props) => {
    const className = props.children.props.className || "";
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        theme={Oceanic}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  },
};
export const wrapRootElement = ({ element }) => {
  return (
    <Store>
      <MDXProvider components={component}>{element}</MDXProvider>
    </Store>
  );
};
