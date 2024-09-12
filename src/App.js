import React, { useState } from "react";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaUserAlt, FaKeyboard, FaMicrophone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePhotoCamera } from "react-icons/md";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="bg-zinc-800 text-white flex flex-col justify-between min-h-screen">
      <header className="flex justify-end gap-5 p-5 items-center">
        <a href="https://mail.google.com/mail/?authuser=0&ogbl" className="hover:underline">Gmail</a>
        <a href="https://www.google.com.br/imghp?hl=pt-BR&authuser=0&ogbl" className="hover:underline">Imagens</a>
        <a href="https://www.google.com.br/intl/pt-BR/about/products" className="p-2 rounded-full hover:bg-zinc-700">
          <TfiLayoutGrid3Alt />
        </a>
        <a href="https://accounts.google.com/SignOutOptions?hl=pt-BR&continue=https://www.google.com.br/&ec=GBRAmgQ" className="p-2 rounded-full bg-zinc-700">
          <FaUserAlt />
        </a>
      </header>
      <main className="flex flex-col items-center gap-7 mb-36">
        <h1 className="text-8xl font-semibold">Google</h1>
        <form onSubmit={handleSearch} className="flex flex-row items-center border rounded-full border-zinc-700 p-2 gap-6">
          <button type="submit" ><CiSearch className="text-xl ml-3" /></button>
          <input
            type="text"
            className="w-96 p-1 bg-transparent border-0 focus:border-0 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="mr-5 flex flex-row gap-6">
            <button>
              <FaKeyboard className="text-xl" />
            </button>
            <button>
              <FaMicrophone className="text-xl" />
            </button>
            <button>
              <MdOutlinePhotoCamera className="text-xl" />
            </button>
          </div>
        </form>
        <div className="flex gap-8">
          <a href={`https://www.google.com/search?q=${encodeURIComponent(query)}`} className="bg-zinc-700 p-2 rounded hover:border">
            Pesquisa Google
          </a>
          <a href="https://doodles.google" className="bg-zinc-700 p-2 rounded hover:border">Estou com sorte</a>
        </div>
      </main>
      <footer className="bg-zinc-900">
        <div className="p-3 ml-2">
          <p>Brasil</p>
        </div>
        <hr className="border-zinc-700"/>
        <div className="flex justify-between p-4">
          <div className="flex gap-7">
            <a className="hover:underline" href="https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjArPDf472IAxU4H7kGHe4qD8YQkNQCCCA&url=https%3A%2F%2Fabout.google%2F%3Futm_source%3Dgoogle-BR%26utm_medium%3Dreferral%26utm_campaign%3Dhp-footer%26fg%3D1&usg=AOvVaw3gf0CCgkBW5U8ABkzdJTLX&opi=89978449">Sobre</a>
            <a className="hover:underline" href="https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjArPDf472IAxU4H7kGHe4qD8YQkdQCCCE&url=https%3A%2F%2Fwww.google.com.br%2Fintl%2Fpt-BR_br%2Fads%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&usg=AOvVaw3Sq6wcbMHcovx5rrWuNx-E&opi=89978449">Publicidade</a>
            <a className="hover:underline" href="https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjArPDf472IAxU4H7kGHe4qD8YQktQCCCI&url=https%3A%2F%2Fwww.google.com.br%2Fservices%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&usg=AOvVaw3jcWIj0wtwReXmthB_910v&opi=89978449">Negócios</a>
            <a className="hover:underline" href="https://google.com/search/howsearchworks/?fg=1">Como funciona a pesquisa</a>
          </div>
          <div className="flex gap-7">
            <a className="hover:underline" href="https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjArPDf472IAxU4H7kGHe4qD8YQ8awCCCM&url=https%3A%2F%2Fpolicies.google.com%2Fprivacy%3Fhl%3Dpt-BR%26fg%3D1&usg=AOvVaw38fspUc-lPeC-l8V8E2yk0&opi=89978449">Privacidade</a>
            <a className="hover:underline" href="https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjArPDf472IAxU4H7kGHe4qD8YQ8qwCCCQ&url=https%3A%2F%2Fpolicies.google.com%2Fterms%3Fhl%3Dpt-BR%26fg%3D1&usg=AOvVaw3h34CxlTDQxqKNSK8DxUZk&opi=89978449">Termos</a>
            <a className="hover:underline" href="#">Configurações</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
