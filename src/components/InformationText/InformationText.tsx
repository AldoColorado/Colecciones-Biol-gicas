import "./information-text.css";

const InformationText = ({ text }: { text: string }) => {
  return (
    <>
      <div className="container-informationtext">
        <h5 className="container-label">{text}</h5>
      </div>
    </>
  );
};

export default InformationText;
