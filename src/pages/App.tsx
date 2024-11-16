import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import { useAllBooks } from "../domain/services/booksService";
import { Card } from "../components/Card/Card";

function App() {
  const { data, isLoading } = useAllBooks();
  const [inputValue, setInputValue] = useState("");

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  console.log(inputValue);
  return (
    <div className="w-full h-full flex flex-col items-center p-2 lg:p-8">
      <h1 className="text-6xl text-blue-400">Hello World</h1>
      <div className="flex gap-3">
        <Input
          value={inputValue}
          onChange={setInputValue}
          label="Pesquisar"
          onClick={() => setInputValue("")}
        />
        <Button
          variant="default"
          onClick={() => alert("Hello World")}
          icon="Search"
          iconPosition="only"
          text="Teste"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.data.map((book: any, idx: number) => (
          <Card
            key={idx}
            author={book.author}
            rating={book.rating}
            availability={book.availability}
            title={book.title.portuguese}
            description={book.description.portuguese}
            genre={book.genre.portuguese.join(", ")}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
