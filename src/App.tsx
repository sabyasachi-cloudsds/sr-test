import React, { useState } from "react";

interface ButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: ButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

export default function App() {
  const [enabled, setEnabled] = useState<boolean>(false); //not much useful, can use in a traditional way
  return (
    <div>
      <h1>Hello</h1>
      <MyButton title="I'm Button" disabled={true} />
    </div>
  );
}
