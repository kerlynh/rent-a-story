import { useAllBooks } from "../../domain/services/booksService";
import { Card } from "../../components/Card/Card";
import { Header } from "./components/Header/Header";
import { formattedValue } from "../../utils/currency";
import { Loading } from "../../components/Loading/Loading";
import { useBookSearchStore } from "../../store/booksSearchStore";
import { Footer } from "./components/Footer/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const { page, limit, searchBy, searchTerm, available, setPage, setLimit } =
    useBookSearchStore((state) => state);
  const { data, isLoading } = useAllBooks(
    page,
    limit,
    searchBy,
    searchTerm,
    available
  );

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="w-full h-screen bg-gray-300/50 flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <main className="w-full h-full flex flex-col items-center px-5 pt-[170px] md:pt-[110px] pb-[102px] md:px-3  lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.data.map((book: any, idx: number) => (
              <Card
                key={idx}
                author={book.author}
                rating={book.rating}
                availability={book.availability}
                title={book.title[i18n.language]}
                description={book.description[i18n.language]}
                genre={book.genre[i18n.language].join(", ")}
                price={formattedValue("pt-BR", "BRL", book.price)}
              />
            ))}
          </div>
        </main>
      )}
      <Footer
        total={data?.total || 0}
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default App;
