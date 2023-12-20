import "./title.css";

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <div className="title-container">
        <h1 className="title-label">{text}</h1>
      </div>
    </>
  );
};

export default Title;
