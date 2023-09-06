import Link from "next/link";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const NavBar = ({ children }: IProps) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/exercices">Exercices</Link>
        </li>
        <li>
          <Link href="/setting">Setting</Link>
        </li>
        <li>
          <Link href="/mypage">My Page</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default NavBar;
