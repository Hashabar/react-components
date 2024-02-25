import { PropsWithChildren } from "react";

type Tablehead = {
    className: string;
}

function TableHead(props: PropsWithChildren<Tablehead>) {
    return (
        <thead className={props.className}>
            <th>{props.children}</th>
        </thead>
    );
}
export default TableHead