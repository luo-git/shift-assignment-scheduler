import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Schedule } from "../types/schedule";
import dayjs from "dayjs";

type ScheduleViewProps = {
  schedules: Schedule[];
};

const columnHelper = createColumnHelper<Schedule>();

const columns = [
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => dayjs(info.getValue()).format("YY/MM/DD"),
  }),
  columnHelper.accessor("shift", {
    header: "Shift",
    cell: (info) => info.getValue().startTime + " - " + info.getValue().endTime,
  }),
  columnHelper.accessor("staff.name", {
    header: "Staff Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("staff.title", {
    header: "Staff Title",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("mealBreak", {
    header: "Meal Break",
    cell: (info) => `Meal Break ${info.getValue()}`,
  }),
  columnHelper.accessor("assignment.name", {
    header: "Assignment",
    cell: (info) => info.getValue(),
  }),
];

export default function ScheduleView(props: ScheduleViewProps) {
  const { schedules } = props;

  const table = useReactTable<Schedule>({
    data: schedules,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="card bg-base-100 shadow-sm overflow-x-auto">
      {/* Tanstack table */}
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-base-300">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
