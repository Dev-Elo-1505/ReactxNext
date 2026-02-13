import { useState } from "react";

type Layout = "vertical" | "grid" | "horizontal";
interface ContainerProps {
  children: React.ReactNode;
  layout: Layout;
}

type Color = "blue" | "green" | "purple" | "red";
interface CardProps {
  title: string;
  children: React.ReactNode;
  color: Color;
}

const Card = ({ title, children, color }: CardProps) => {
  const ColorClass = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };
  return (
    <div className={`border-l-4 ${ColorClass[color]} p-4 rounded-md`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

const Container = ({ children, layout = "vertical" }: ContainerProps) => {
  const LayoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-3",
  };
  return <div className={`${LayoutClasses[layout]}`}>{children}</div>;
};

const ChildrenProps = () => {
  const [layout, setLayout] = useState<Layout>("grid");

  const changeLayout = () => {
    const nextLayout =
      Math.random() < 0.33
        ? "vertical"
        : Math.random() < 0.5
          ? "horizontal"
          : "grid";
    setLayout(nextLayout);
  };
  return (
    <section className="text-gray-600 bg-white p-4 m-4 rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Children Props</h2>
      <p>
        The children props allows you to pass jsx elements or components as
        children to other components, enabling component composition.
      </p>

      <div className="mt-3">
        <h3 className="text-xl font-semibold mb-2">
          Card Components with Children
        </h3>
        <button
          className="mb-4 bg-purple-700 text-white p-2 rounded cursor-pointer"
          onClick={changeLayout}
        >
          Change View
        </button>
        <p>Layout: {layout}</p>
        <Container layout={layout}>
          <Card title="User Profile" color="blue">
            <p className="flex justify-between items-center">
              <strong>Name: </strong>David Addisi
            </p>
            <p className="flex justify-between items-center">
              <strong>Email: </strong>david@example.com
            </p>
            <p className="flex justify-between items-center">
              <strong>Role: </strong>Footballer
            </p>
          </Card>
          <Card title="Statistics" color="green">
            <p>Total Users: 10, 634</p>
            <p>Active Sessions: 5067</p>
            <p>Revenue: $120,000</p>
          </Card>
          <Card title="Quick Actions" color="purple">
            <button className="bg-purple-500 text-white px-4 py-2 rounded mr-2 w-full mb-2">
              Add User
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded w-full">
              Generate Report
            </button>
          </Card>
          <Card title="Upgrade Account" color="red">
            <p>
              Your trial ends in 5 days. Please upgrade your account to continue
              using all the features.
            </p>
          </Card>
        </Container>
      </div>
    </section>
  );
};

export default ChildrenProps;
