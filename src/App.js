// CRIO_SOLUTION_AND_STUB_ONLY_START_MODULE_ONE
// Start your implementation with App.js Here, All the best!
// CRIO_SOLUTION_AND_STUB_ONLY_END_MODULE_ONE
// CRIO_SOLUTION_START_MODULE_ONE
import Home from './pages/Home/Home'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider >
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
// CRIO_SOLUTION_END_MODULE_ONE