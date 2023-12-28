import "./title-login.css";

const TitleLogin = ({ text }: { text: string }) => {
  return (
    <>
      <div className="title-login-container">
        <h2 className="title-login-label">{text}</h2>
      </div>
    </>
  );
};

export default TitleLogin;
