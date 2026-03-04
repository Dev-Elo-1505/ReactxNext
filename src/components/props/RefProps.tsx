import { useRef } from "react";

const RefProps = () => {
  const countRef = useRef(0);

  const trackCount = () => {
    countRef.current += 1;
    console.log(countRef.current);
  }

  return (
    <section className="p-4 bg-white mb-4 rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Ref Props</h2>
      <p className="text-gray-600 mb-6">
        useRef is a React hook that gives you a mutable object that persists
        across renders without causing re-renders when it changes. It returns an
        object with a single .current property.
      </p>
      
        
      <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors" onClick={trackCount}>Click me</button>
      <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors" onClick={() => alert(countRef.current)}>Show Count</button>
    </section>
  );
};

export default RefProps;
