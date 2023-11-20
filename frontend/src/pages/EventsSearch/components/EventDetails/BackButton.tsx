import {Link } from "react-router-dom";
export default function BackButton() {
  return (
    <Link to="/" className="text-xl text-white">
      {`< `}
      <span className="underline ml-1">Back</span>
    </Link>
  );
}
