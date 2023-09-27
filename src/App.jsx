import React from 'react';
import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-2xl uppercase text-white font-semibold tracking-[0.4em]">
            Todo
          </h1>
          <button>
            <MoonIcon fill="#FFF" />
          </button>
        </div>
        <form
          action=""
          className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8"
        >
          <span className="rounded-full inline-block w-4 h-4 border-2 "></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8 ">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 items-center border-b border-b-gray-300">
            <button className="rounded-full inline-block w-4 h-4 border-2 "></button>
            <p className="text-gray-600 grow">
              Complete onle Javascript curse in bluuweb
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 items-center border-b border-b-gray-300">
            <button className="rounded-full inline-block w-4 h-4 border-2 "></button>
            <p className="text-gray-600 grow">
              Complete onle Javascript curse in bluuweb
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 items-center border-b border-b-gray-300">
            <button className="rounded-full inline-block w-4 h-4 border-2 "></button>
            <p className="text-gray-600 grow">
              Complete onle Javascript curse in bluuweb
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between p-4">
            <span className="text-gray-400"> 5 items left</span>
            <button className=" text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className=" hover:text-blue-600">Active</button>
          <button className=" hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8">Drag and Drop</p>
    </div>
  );
};

export default App;
