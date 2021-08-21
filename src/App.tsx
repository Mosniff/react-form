import './App.css';
import { Form } from './components/form';
import { FormProvider } from './context/form.context';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
