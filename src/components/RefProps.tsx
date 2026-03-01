import { useEffect, useRef } from "react";

const RefProps = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [])

  return (
    <section className="p-4 bg-white mb-4 rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Ref Props</h2>
      <p className="text-gray-600 mb-6">
        useRef is a React hook that gives you a mutable object that persists
        across renders without causing re-renders when it changes. It returns an
        object with a single .current property.
      </p>
      <div className="bg-gray-100 rounded-full p-2 flex items-center">
        <input type="text" placeholder="Search for roles" className="w-full ml-4 focus:outline-0" ref={searchRef} />
      </div>
    </section>
  );
};

export default RefProps;
