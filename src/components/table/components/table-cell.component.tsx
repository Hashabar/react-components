import { PropsWithChildren } from "react";

type TableCellProps = {
    className?: string;
}

function TableCell(props: PropsWithChildren<TableCellProps>) {
    return <td className={props.className}>{props.children}</td>;
}
export default TableCell