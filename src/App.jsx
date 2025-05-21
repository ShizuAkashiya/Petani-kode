import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";


const Home = () => (
  <>
    <Hero />
    <Content />
  </>
);

const Kelas = () => (
  <div className="min-h-screen text-center pt-20 text-2xl text-white">Halaman Kelas</div>
);

const Tutorial = () => (
  <div className="min-h-screen text-center pt-20 text-2xl text-white">Halaman Tutorial</div>
);

const Buku = () => (
  <div className="min-h-screen text-center pt-20 text-2xl text-white">Halaman Buku</div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/buku" element={<Buku />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;