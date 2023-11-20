import { useNavigate, Link } from "react-router-dom";
export default function BackButton() {
  const nav = useNavigate();
  return (
    <Link to="/" className="text-2xl text-white">
      {`< `}
      <span className="underline ml-1">Back</span>
    </Link>
  );
}
