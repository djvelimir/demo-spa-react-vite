import { Link } from "react-router-dom";

function PageNotFoundView() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-green-500 text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <Link
        to="/home"
        className="mt-10 flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        Go Home
      </Link>
    </main>
  );
}

export default PageNotFoundView;
