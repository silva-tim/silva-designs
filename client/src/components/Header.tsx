import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex bg-slate-600 h-52 flex-wrap">
      <span className="raleway tracking-tight text-4xl basis-full">
        S I L V A &nbsp; D E S I G N S
      </span>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
      </nav>
    </div>
  );
}

// better yesterday
// aptos instead of apple gothic if cant find
