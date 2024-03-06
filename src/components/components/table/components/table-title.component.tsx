import { PropsWithChildren } from "react";

type TableTitleProps = {
  className?: string;
  title: string;
};

function TableTitle(props: PropsWithChildren<TableTitleProps>) {
  return <div className={props.className}> {props.title}</div>;
}

export default TableTitle;
