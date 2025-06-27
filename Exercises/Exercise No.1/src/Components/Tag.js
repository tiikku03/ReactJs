import React from "react";

function Tag({ text, color = "blue" }) {
  const styles = {
    backgroundColor: color,
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    display: "inline-block",
  };

  return <span style={styles}>{text}</span>;
}

export default Tag;