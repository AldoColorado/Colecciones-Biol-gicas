import "./title-herbario.css";

const TitleHerbario = ({ text }: { text: string }) => {
  return (
    <>
      <div className="title-herbario-container">
        <h2 className="title-herbario-label">{text}</h2>
      </div>
    </>
  );
};

export default TitleHerbario;
