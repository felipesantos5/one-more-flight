import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="text-white bg-black/50 max-w-5xl m-auto flex justify-between items-center">
      <div>
        <h1 className="text-3xl">
          <span className="font-bold">U</span>travel
        </h1>
      </div>
      <nav className="flex gap-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/help"}>Help</Link>
        <Link to={"/login"}>Log in</Link>
        <Link to={"/register"}>Sing up</Link>
      </nav>
    </header>
  );
};
