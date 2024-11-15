import { Button } from "../components/Button/Button";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-6xl text-blue-400">Hello World</h1>
      <Button
        variant="default"
        onClick={() => alert("Hello World")}
        icon="Send"
        iconPosition="only"
        text="Teste"
      />
    </div>
  );
}

export default App;
