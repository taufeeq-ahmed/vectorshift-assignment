import React from "react";

function OutputIcon(props) {
  return (
    <svg focusable="false" viewBox="0 0 24 24" {...props}>
      <path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"></path>
      <path d="M19 19H5V5h14v2h2V5c0-1.1-.89-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.11 0 2-.9 2-2v-2h-2z"></path>
    </svg>
  );
}

export default OutputIcon;
