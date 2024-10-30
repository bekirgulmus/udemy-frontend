import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";

export const ExpandablePanel = ({header,children}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  }

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>
        <div onClick={handleClick}>
          {expanded ? <GoChevronLeft/> : <GoChevronDown/>}
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  )
}
