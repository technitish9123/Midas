import Hero from "@/components/home";
type Props = {
  className?: string;
};

const Home: React.FC = (props: Props) => {
  return (
    <main className="">
      <Hero />
    </main>
  );
};

export default Home;
