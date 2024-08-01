import Image from "next/image";

export default function emJesus() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid grid-cols-6 fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <div className="content-center text-right">
            <a type="button" href="/" className="col-span-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path fill="none" d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
                L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
                c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
                c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
                S18.707,9.212,18.271,9.212z"></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </a>
          </div>
          <div className="font-mono font-bold text-xl text-center content-center col-span-4">
            <p>
              SÓ EM JESUS 
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 z-[99]"
            href="/"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center pb-40 pt-28 lg:py-40 overflow-hidden">
        <div className="text-center relative z-[-1] flex place-items-center before:absolute before:h-[50px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-20 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <p>
            Só em Jesus posso esperar <br />
            É minha força é minha luz <br />
            Ele é a pedra angular <br />
            Que nada pode abalar <br /><br />

            Que imenso amor profunda paz <br />
            Quando a batalha terminar <br />
            Jesus é tudo para mim<br />
            Dá-me abrigo até o fim.<br /><br />

            Em carne o Verbo se tornou<br />
            Deus encarnado num bebê <br />
            É dom de amor e retidão <br />
            Salvou a quem o desprezou<br /><br />

            Ali na cruz em que morreu <br />
            De Deus o plano se cumpriu<br />
            O meu pecado carregou<br />
            Por sua morte vivo estou.<br /><br />

            Seu corpo inerte ali no chão <br />
            É luz em meio a escuridão <br />
            Da sepultura levantou<br />
            Glorioso dia se tornou.<br /><br />

            Quando em Vitória ressurgiu <br />
            Os pecadores redimiu<br />
            Agora é meu e dEle sou<br />
            Pois com seu sangue me comprou.<br /><br />

            A minha fé é o meu amor <br />
            Estão firmados no Senhor <br />
            Estão firmados no Senhor.<br /><br />

            A minha fé é o meu amor<br />
            Estão firmados no Senhor <br />
            Estão firmados no Senhor<br /><br />

            A morte eu não vou temer <br />
            Pois tenho o seu poder<br />
            Desde o nascer até o morrer<br />
            Cristo comanda o meu viver.<br /><br />

            O inferno não conseguirá<br />
            De Suas mãos me arrancar <br />
            Até voltar ou me chamar<br />
            Em seu poder me manterei.<br /><br />

            Este é o meu respirar <br />
            Este é o meu respirar<br />
            Teu Santo Espírito <br />
            Vive em mim.<br /><br />

            E este é o meu Pão <br />
            E este é o meu Pão <br />
            Tua vontade <br />
            Feita em mim. <br /><br />

            E eu, eu nada sou sem Ti<br />
            E eu, perdido estou sem Ti.<br /><br />

            E eu, eu nada sou sem Ti<br />
            E eu, perdido estou sem Ti<br /><br />
            Jesus!
          </p>
        </div>
      </div>
    </main>
  );
}
