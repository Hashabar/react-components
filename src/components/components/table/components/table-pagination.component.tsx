import { PropsWithChildren } from "react";

type TablePaginationProps = {
  className?: string;
};

function TablePagination(props: PropsWithChildren<TablePaginationProps>) {
  return <div className={props.className}>{props.children}</div>;
}
export default TablePagination;
