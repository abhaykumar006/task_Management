import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { Modal } from "./components/Modal";
import { ErrorBoundaryWrapper } from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundaryWrapper>
        <AppRoutes />
        <Modal />
      </ErrorBoundaryWrapper>
    </Router>
  );
}

export default App;
