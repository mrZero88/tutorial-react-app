import { useState } from "react";
import { FcLike } from "react-icons/fc";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    onClick();
  };

  return liked ? (
    <FcLike onClick={toggleLike} size={40} opacity={1.0} />
  ) : (
    <FcLike onClick={toggleLike} size={40} opacity={0.5} />
  );
};

export default Like;
