import { PropsWithChildren } from "react";

type Tablehead = {
    className?: string;
}

function TableHead(props: PropsWithChildren<Tablehead>) {
    return (
        <thead className={props.className}>
            <tr>{props.children}</tr>
        </thead>
    );
}
export default TableHead