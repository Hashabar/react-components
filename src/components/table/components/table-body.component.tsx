import { PropsWithChildren } from "react";

type TableBodyProps = {
    className?: string; //pose vir class vazio
}

function TableBody(props: PropsWithChildren<TableBodyProps>) {
    return <tbody className={props.className}>{props.children}</tbody>;
}
export default TableBody