import { PropsWithChildren } from "react";

type TableHeaderProps = {
    name: string;
    className: string;
}

function TableHeader(props: PropsWithChildren<TableHeaderProps>) {
    return <th className={props.className}>{props.name}</th>
}
export default TableHeader