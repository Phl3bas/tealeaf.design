import React from "react";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  return (
    <div
      style={{
        height: "calc(100% - 11rem)",
        width: "25%",
      }}
    >
      <div
        style={{
          height: "calc(100% - 11rem)",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          padding: "2rem 0.5rem",
          minWidth: "15em",
          background: "white",
          overflowY: "scroll",
        }}
      >
        {children}
      </div>
    </div>
  );
};