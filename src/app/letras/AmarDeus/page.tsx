import Image from "next/image";

export default function AmarDeus() {
  return (
    <main>
      <div className="relative z-[-1] pt-64 -mb-64 sticky top-0 content-center object-contain fixed before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-72 after:w-72 after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-600 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-400 before:dark:opacity-10 after:dark:from-green-700 after:dark:via-[#88B25F] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <div className="flex min-h-screen flex-col items-center justify-between">
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
          <div className="text-center flex place-items-center">
            <p>
            De onde o vento vem <br />
            Vai soprar para o norte ou sul <br />
            Aonde vai ? <br /><br />

            De onde o vento vem <br />
            Vai soprar para o norte ou sul <br />
            Aonde vai ? <br /><br />

            O rio corre para o mar <br />
            Mas o mar jamais se encheu <br />
            Como pode ser ? <br />
            Como aconteceu ? <br />
            Como entender ? <br /><br />

            São tantas gerações que vão e vem <br />
            Mas permanece a Terra para sempre <br />
            O espírito retornará a Deus <br />
            Tão vazio, tudo em vão ! <br /><br />

            Amar a Deus, razão de viver <br />
            Amar a Deus, razão maior <br />
            Nada mais me satisfaz <br />
            Esperançar vida traz <br />
            Tão presente e tão real <br /><br />

            Amar a Deus, Amar a Deus <br />
            Nada mais me satisfaz <br />
            Esperançar vida traz <br />
            Tão presente e tão real <br />

            Amar a Deus, amar a Deus <br /><br />
            Amar a Deus!!!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
