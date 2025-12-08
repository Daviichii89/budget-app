import { Container } from "semantic-ui-react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntriesAction } from "./actions/entries.actions";

function App() {
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState(null);
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);
  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setTotalIncomes(totalIncomes);
    setTotalExpenses(totalExpenses);
    setTotal(totalIncomes - totalExpenses);
  }, [entries]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEntriesAction());
  }, [dispatch]);
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
      />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
