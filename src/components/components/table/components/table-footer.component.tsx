import { PropsWithChildren } from "react";

type TableFooter = {
  className?: string;
};

function TableFooter(props: PropsWithChildren<TableFooter>) {
  return <div className={props.className}>{props.children}</div>;
}
export default TableFooter;
