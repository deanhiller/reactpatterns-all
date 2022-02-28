import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./routes/notFound";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import MainPage from "./routes/mainpage"
import ViewInvoice from "./routes/invoice";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<MainPage />}>
                  <Route path="expenses" element={<Expenses />} />
                  <Route path="invoices" element={<Invoices />}>
                      <Route
                          index
                          element={
                              <main style={{ padding: "1rem" }}>
                                  <p>Select an invoice</p>
                              </main>
                          }
                      />
                      <Route path=":invoiceId" element={<ViewInvoice />} />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
