import axios from "axios";
import { useEffect, useState } from "react";
import { TableColumn } from "./components/components/table/classes/table-column.class";
import { Table } from "./components/components/table/components/table.index";
import Loading from "./components/shared/loading/loading.component";
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
        .post("/person?take=100")
        .then((response) => {
          setIsLoading(false);
          return response.data.persons as Person[];
    })
    .catch(() => {
      setIsLoading(false);
      return [];
    })
    )
  }

  return (
    <div className="flex h-screen w-screen flex-col bg-base-300 p-12">
      {isLoading && (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Loading size="w-20 h-20" />
        </div>
      )}
      {!isLoading && (
        <Table.Root className="flex w-full flex-col min-h-0 flex-1 rounded-lg p-1 bg-base-200">
          <Table.Title
            className="bg-base-200 p-2 flex flex-col justify-center items-center"
            title="People"
          />
          <Table.Content className="w-full table table-pin-rows">
            <Table.Head>
              {tableColums.map((tableColumn) => {
                return (
                  <Table.Header
                    className={tableColumn.className}
                    name={tableColumn.name}
                    key={tableColumn.name}
                  ></Table.Header>
                );
              })}
            </Table.Head>
            <Table.Body>
              {data.map((row) => {
                return (
                  <Table.Row className="bg-base-100" key={row.id}>
                    <Table.Cell>{row.name}</Table.Cell>
                    <Table.Cell>{row.age}</Table.Cell>
                    <Table.Cell>{row.sex}</Table.Cell>
                    <Table.Cell>{row.address}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
          <Table.Pagination className="sticky bottom-0 bg-base-200 w-full h-10">
            teste
          </Table.Pagination>
        </Table.Root>
      )}
    </div>
  );
}

export default App;
