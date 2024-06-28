import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TableData } from "../../lib/utils";
import { TableRowDesktop } from "./table-row-desktop";

export const UrlTableDesktop = ({ tableData }: { tableData: TableData[] }) => {
  return (
    <Table className="text-left w-full">
      <TableCaption>A list of your recent urls.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-40 max-w-56">Original Url</TableHead>

          <TableHead className="w-40 max-w-56">Shortened Url</TableHead>
          <TableHead className="w-4 max-w-14  ">Copy to clipboard</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((data, index) => (
          <TableRowDesktop
            key={index}
            index={index}
            originalUrl={data.originalUrl}
            shortUrl={data.shortUrl}
          />
        ))}
      </TableBody>
    </Table>
  );
};
