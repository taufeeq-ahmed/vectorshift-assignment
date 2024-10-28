import React from "react";
import { twMerge } from "tailwind-merge";

function BaseNode({ nodeType, children }) {
  return (
    <div
      className={twMerge(
        "base-node-wrapper group max-w-[460px] min-w-[200px]",
        "rounded-lg overflow-hidden hover:shadow-[0_0_0_3px_#cdcffc]"
      )}
    >
      <div className="base-node rounded-lg bg-white p-2 border-[1px] border-[#6366f1]">
        <div className="base-node-header">
          <span className="text-heading group-hover:text-hover text-base font-semibold">
            {nodeType}
          </span>
        </div>
        <div className="base-node-content p-2">{children}</div>
      </div>
    </div>
  );
}

export default BaseNode;
