import { Clipboard, ClipboardCheck } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import { useState } from "react";
import { toast } from "sonner";

export const TableRowDesktop = ({
  index,
  originalUrl,
  shortUrl,
}: {
  index: number;
  originalUrl: string;
  shortUrl: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = (shortUrl: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortUrl);
    toast.success("Copied to clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <TableRow key={index}>
      <TableCell className="w-24 truncate max-w-32">
        <a href={originalUrl} className="hover:underline">
          {originalUrl}
        </a>
      </TableCell>

      <TableCell className="w-24 font-medium truncate max-w-32">
        <a href={shortUrl} className="hover:underline">
          {shortUrl}
        </a>
      </TableCell>
      <TableCell
        onClick={() => handleCopyToClipboard(shortUrl)}
        className="flex justify-center mx-auto cursor-pointer transition-all  max-w-16 hover:bg-accent rounded-md"
      >
        {isCopied ? (
          <ClipboardCheck className="h-5 w-5" />
        ) : (
          <Clipboard className="h-5 w-5" />
        )}
      </TableCell>
    </TableRow>
  );
};
