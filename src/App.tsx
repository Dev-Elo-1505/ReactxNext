import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
const isDark = true;
function Navigation() {
  const section = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "🧒" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "ref", label: "Ref Props", icon: "📌" },
    { id: "theme", label: "Theme Toggler", icon: "🌓" },
  ];
  return (
    <nav
      className={`sticky top-0 z-50 p-4 shadow ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="flex items-center justify-center gap-6">
        {section.map(({ id, label, icon }) => (
          <button
            className="bg-blue-600 rounded p-2 hover:bg-blue-700"
            key={id}
          >
            <span className="mr-2">{icon}</span> {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <header>
        <div
          className={`container mx-auto p-4 ${isDark ? "text-white" : "text-black"}`}
        >
          <h1 className="text-4xl font-bold mb-4 text-center">React Props</h1>
          <p className="text-lg text-center">
            A comprehensive guide to mastering React Props.
          </p>
        </div>
      </header>
      <main>
        <div className="scroll-mt-2">
          <BasicProps />
        </div>
        <div>
          <ChildrenProps />
        </div>
        <div>
          <ComplexProps />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
