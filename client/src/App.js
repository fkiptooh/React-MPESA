import DisplayTable from "./components/DisplayTable";
import Header from "./components/Header";
import PaymentForm from "./components/PaymentForm";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <PaymentForm />
            <DisplayTable />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
