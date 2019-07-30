import React, { useContext } from "react";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SampleProvider } from "./contexts/SampleContext";

import Form from "./Form";
function App() {
  return (
    <ThemeProvider>
      <SampleProvider>
        <PageContent>
          <Form />
        </PageContent>
      </SampleProvider>
    </ThemeProvider>
  );
}

export default App;
