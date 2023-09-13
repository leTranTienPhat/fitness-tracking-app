import { useRouter } from "next/navigation";
import { ElementType, useEffect, useState } from "react";
import { localStorage } from "../storage/localStorage";
import { Spinner } from "@chakra-ui/react";

export default function withAuth(Component: ElementType) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const user = localStorage.getAuth();
    const userIsAuthenticated = user !== null;

    useEffect(() => {
      setIsLoading(true);
      if (!userIsAuthenticated) {
        router.push("auth/login");
      } else setIsLoading(false);
    }, [userIsAuthenticated, router]);

    return isLoading ? <Spinner /> : <Component {...props} />;
  };
}
