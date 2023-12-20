import "./primary-button.css";

interface ButtonProps {
  name: string;
}

const PrimaryButton = (params: ButtonProps) => {
  const { name } = params;
  return (
    <>
      <div className="primaryButton">{name}</div>
    </>
  );
};

export default PrimaryButton;
