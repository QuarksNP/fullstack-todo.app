interface RedirectProps {
  to: string;
  question: string;
}

import { Link } from "wouter";

export const Redirect = ({
  children,
  question,
  to,
}: React.PropsWithChildren<RedirectProps>) => {
  return (
    <div className="mt-5 flex gap-3">
      {question}
      <Link href={to}>{children}</Link>
    </div>
  );
};
