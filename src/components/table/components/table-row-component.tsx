import { PropsWithChildren } from "react";

type TableRowProps = {
    className?: string;
}

function TableRow(props: PropsWithChildren<TableRowProps>) {
    return <tr className={props.className}>{props.children}</tr>;
}
export default TableRow