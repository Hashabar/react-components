import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/shared/loading/loading.component";
import { TableColumn } from "./components/table/classes/table-column.class";
import TableBody from "./components/table/components/table-body.component";
import TableCell from "./components/table/components/table-cell.component";
import TableFooter from "./components/table/components/table-footer.component";
import TableHead from "./components/table/components/table-head.component";
import TableHeader from "./components/table/components/table-header.component";
import TableRow from "./components/table/components/table-row-component";
import Table from "./components/table/components/table.component";
import { Person } from "./data/person.class";
import "./index";

function App() {
  const tableColums: TableColumn[] = [
    new TableColumn("Nome", "bg-base-200"),
    new TableColumn("Idade", "bg-base-200"),
    new TableColumn("Sexo", "bg-base-200"),
    new TableColumn("Endereço", "bg-base-200"),
  ];

  const [data, setData] = useState<Person[]>([]); //definindo a const person[]
  const [isLoading, setIsLoading] = useState(true); //definindo a const person[]

  useEffect(()=>{ // uso de rooks do react
    getData();
  }, []);

  async function getData(): Promise<void> { //uma funcao async de uma requisicao de uma lista de pessoa
    axios.defaults.baseURL = "http://localhost:8000";
    setData(
      await axios
        .post("/person")
        .then((response) => {
          setIsLoading(false);
        return response.data as Person[];
    })
    .catch(() => {
      setIsLoading(false);
      return [];
    })
    )
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-gray-600 p-12">
      <div className="min-h-0 w-full flex-1 overflow-y-auto">
        {isLoading && (
          <div className = "flex flex-col justify-center items-center w-full h-full">
            <Loading size="w-20 h-20"/>
          </div>
        )}
        {!isLoading && (
          <Table className="w-full table table-pin-rows">   
            <TableHead> 
              {tableColums.map((tableColumn) => {
                return (
                  <TableHeader
                    className={tableColumn.className}
                    name={tableColumn.name}
                    key={tableColumn.name}
                  ></TableHeader>
                );
              })}
            </TableHead>
            <TableBody>
              {data.map((row) => { //.map e o foreach
                return (
                  <TableRow className="bg-base-100" key={row.id}>
                    <TableCell>{row.name} </TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.sex} </TableCell>
                    <TableCell>{row.address}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter className="sticky bottom-0 bg-primary w-full">teste</TableFooter>
          </Table>
        )}
      </div>
    </div>
  );
}

export default App;