import { PropsWithChildren } from "react";

type TableContentProps = {
  className?: string;
};

function TableContent(props: PropsWithChildren<TableContentProps>) {
  return (
    <div className="min-h-0 w-full flex-1 overflow-y-auto">
      <table className={props.className}> {props.children}</table>
    </div>
  );
}

export default TableContent;
