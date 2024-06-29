import { useMediaQuery } from "../../hooks/use-media-query";
import { UrlTableDesktop } from "./table-desktop";
import { UrlTableMobile } from "./table-mobile";
import useLocalStorage from "../../hooks/use-local-storage";

export const Table = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [storage] = useLocalStorage("urls");

  return (
    <>
      <div className="max-h-[60vh] overflow-auto w-full">
        {isDesktop ? (
          <UrlTableDesktop tableData={storage} />
        ) : (
          <UrlTableMobile tableData={storage} />
        )}
      </div>
    </>
  );
};
