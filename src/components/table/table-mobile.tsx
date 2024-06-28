import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { toast } from "sonner";
import { TableData } from "../../lib/utils";

export const UrlTableMobile = ({ tableData }: { tableData: TableData[] }) => {
  const [_, setIsCopied] = useState(false);

  const handleCopyToClipboard = (shortUrl: string) => {
    setIsCopied(true);
    navigator.clipboard.writeText(shortUrl);
    toast.success("Copied to clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Table className="text-left w-full">
      <TableCaption>A list of your recent urls.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-40 max-w-56">Original Url</TableHead>
          <TableHead className="w-40 max-w-56">Shortened Url</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data, index) => (
          <TableRow
            key={index}
            onClick={() => handleCopyToClipboard(data.shortUrl)}
          >
            <TableCell className="w-24 truncate max-w-32">
              {data.originalUrl}
            </TableCell>
            <TableCell className="w-24 font-medium truncate max-w-32">
              {data.shortUrl}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
