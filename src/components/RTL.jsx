import { CacheProvider } from "@emotion/react";
import { useEffect } from "react";

const cacheRTL = () => createCache({})

const RTL = ({ children, direction }) => {
  useEffect(() => {
    document.dir = direction;
  }, [direction]);
};

if(direction ==="rtl"){
    return <CacheProvider value={}></CacheProvider>
}