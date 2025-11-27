import { useDispatch } from "react-redux";
import { addEntryAction, updateEntryAction } from "../actions/entries.actions";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { closeEditModalAction } from "../actions/modals.actions";

const useEntryDetails = (desc = "", val = "", isExp = true) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const updateEntry = (id) => {
    dispatch(updateEntryAction(id, { id, description, value, isExpense }));
    dispatch(closeEditModalAction());
    resetEntry();
  };

  const addEntry = () => {
    dispatch(addEntryAction({ id: uuidv4(), description, value, isExpense }));
    resetEntry();
  };
  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };
  return {
    description,
    value,
    isExpense,
    addEntry,
    updateEntry,
    resetEntry,
    setDescription,
    setValue,
    setIsExpense,
  };
};

export default useEntryDetails;
