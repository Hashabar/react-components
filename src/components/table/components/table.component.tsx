import { PropsWithChildren } from "react";

type TableProps = {
    className: string;
}

function Table(props: PropsWithChildren<TableProps>) {
    return (
    <table className={props.className}></table>
    );
}

export default Table