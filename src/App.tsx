import { TableColumn } from "./components/table/classes/table-columns.class";
import TableHead from "./components/table/components/table-head.component";
import TableHeader from "./components/table/components/table-header.component";
import Table from "./components/table/components/table.component";
import DATA from "./data/data";
import "./index";

function App() {
  console.log(DATA);
  const tableColums: TableColumn[] = [
    new TableColumn("Nome"),
    new TableColumn("Idade"),
    new TableColumn("Sexo"),
    new TableColumn("Endereço"),
  ];
  return (
    <div className="bg-green-500 w-screen h-screen flex justify-center items-center">
      <Table className="">
        <TableHead className="">
          {tableColums.map((TableColumn) => {
            return (
              <TableHeader className="" name= {TableColumn.name}></TableHeader>
              );
            })}
        </TableHead>
      </Table>
    </div>
  );
}

export default App;
