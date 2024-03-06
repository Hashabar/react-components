import { PropsWithChildren } from "react";

type TableProps = {
  className?: string;
};

export function TableRoot(props: PropsWithChildren<TableProps>) {
  return <div className={props.className}>{props.children}</div>;
}

