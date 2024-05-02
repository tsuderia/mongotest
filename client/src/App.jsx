import { useState } from "react";
import TableGrid from "./Components/Pages/TableGrid.jsx";
import { Box } from "@chakra-ui/react";
import PageHeading from "./Components/PageHeading.jsx";
import AddTransactionForm from './Components/Pages/AddTransactionForm.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <PageHeading />
      <Box mx={200} px={6} pt={30} fontSize="md">
        <Routes>
          <Route path="/" element={<TableGrid />} />
          <Route path="/addTransactionForm" element={<AddTransactionForm />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
