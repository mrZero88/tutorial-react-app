import React from "react";
import Button from "./Button";

interface Props {
  text: string;
  collapsedTextCount: number;
}

const ExpandableText = ({ text, collapsedTextCount }: Props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <p>{isExpanded ? text : text.slice(0, collapsedTextCount)}</p>
      {isExpanded ? (
        <Button onClick={() => setIsExpanded(false)}>Read Less</Button>
      ) : (
        <Button onClick={() => setIsExpanded(true)}>Read More</Button>
      )}
    </>
  );
};

export default ExpandableText;
