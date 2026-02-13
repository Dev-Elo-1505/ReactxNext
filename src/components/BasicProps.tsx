import { useState } from "react";

type Color = "primary" | "secondary" | "danger" | "success";
type Size = "small" | "medium" | "large";

interface ButtonProps {
  text: string;
  color: Color;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  color = "primary",
  size = "medium",
  disabled,
  onClick,
}: ButtonProps) => {
  const colorClass = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
    success: "bg-green-500 hover:bg-green-600",
  };
  const sizeClass = {
    small: "px-4 py-1",
    medium: "px-6 py-2",
    large: "px-8 py-4",
  };
  return (
    <button
      disabled={disabled}
      className={`text-white rounded-lg ${sizeClass[size]} ${
        colorClass[color]
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <section className="text-gray-600 bg-white p-4 m-4 rounded-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Basic Props</h2>
      <p>
        Props are arguments passed to React Components. They allow you to pass
        data from parent to child component.
      </p>
      <div className="mt-3">
        <h3 className="text-xl font-semibold mb-2">Different Colors</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Primary Button" color="primary" onClick={handleClick} />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={handleClick}
          />
          <Button text="Danger Button" color="danger" onClick={handleClick} />
          <Button text="Success Button" color="success" onClick={handleClick} />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-semibold mb-2">Different Sizes</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Small"
            color="primary"
            size="small"
            onClick={handleClick}
          />
          <Button
            text="Medium (Default)"
            color="primary"
            
            onClick={handleClick}
          />
          <Button
            text="Large"
            color="primary"
            size="large"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-semibold mb-2">Disabled State</h3>
        <div className="flex flex-wrap gap-3">
          <Button text="Enabled Button" color="primary" onClick={handleClick} />
          <Button text="Disabled Button" color="primary" disabled />
        </div>
      </div>
      <div className="bg-blue-100 mt-2 p-2">Click Count: {clickCount}</div>
    </section>
  );
};

export default BasicProps;
