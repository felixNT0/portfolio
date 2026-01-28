import { ReactNode, useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Determine loading time or wait for resource load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds total loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full min-h-screen">
        {children}
      </div>
    </>
  );
}
