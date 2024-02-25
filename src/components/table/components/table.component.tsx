import { PropsWithChildren } from "react";

type TableProps = {
    className: string;
}

function Table(props: PropsWithChildren<TableProps>) {
    return <table className={props.className}>{props.children}</table>;
}

export default Table