import { PropsWithChildren, ReactNode } from "react";

type TableProps = {
  className?: string;
};

function Table(props: PropsWithChildren<TableProps>) {
  let children = (props.children as ReactNode[]).slice(
    0,
    (props.children as ReactNode[]).length - 1
  );
  return (
    <>
      <table className={props.className}>{children}</table>
      {(props.children as ReactNode[])[(props.children as ReactNode[]).length - 1]}
    </>
  );
}

export default Table;
