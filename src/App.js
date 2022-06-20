import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import fetchCustomers from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducerKey.cash);
  const customers = useSelector((state) => state.customerReducerKey.customers);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
    // dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
    // dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id });
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div style={{ dispalay: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>add</button>
        <button onClick={() => getCash(Number(prompt()))}>substract</button>
        <button onClick={() => addCustomer(prompt())}>add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          add customers from database
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((element) => (
            <div onClick={() => removeCustomer(element)}>{element.name}</div>
          ))}
        </div>
      ) : (
        <div>No customers</div>
      )}
    </div>
  );
}

export default App;
