import { addManyCustomersAction } from "../store/customerReducer";

// await(await fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=calf0eiad3ie9ojgktpg")).json()

const fetchCustomers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomersAction(json)))
      .catch((error) => {
        console.log("Error in fetch - customers.js!!!");
        console.log(error);
      });
  };
};

export default fetchCustomers;
