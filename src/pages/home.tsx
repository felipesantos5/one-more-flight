import { Form } from "../components/form/formHome";
import { Header } from "../components/header/header";

export const Home = () => {
  return (
    <main className="h-screen">
      <div className="bg-homeBg bg-cover bg-no-repeat bg-center h-72 relative">
        <Header></Header>
        <Form></Form>
      </div>
    </main>
  );
};
