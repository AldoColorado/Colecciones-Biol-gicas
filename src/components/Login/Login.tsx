import Modal from "@mui/material/Modal";
import "./login.css";
import TitleHerbario from "./LoginTittle/TitleHerbario/TitleHerbario";
import TitleLogin from "./LoginTittle/TitleLogin/TitleLogin";
import LoginInput from "./LoginInput/LoginInput";
import PersonIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import { useState } from "react";
import CustomInput from "./input/CustomInput";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import RegisterButton from "./RegisterButton/RegisterButton";

const Login = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
}) => {
  const [login, setLogin] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <div className="modal-img"></div>
          <div className="modal-formulario">
            <div className="modal-titles">
              <TitleHerbario text="Herbario" />
              <TitleLogin text="Inicio de sesión" />
            </div>
            <div className="login-imputs">
              <LoginInput
                text="Correo"
                input={
                  <input
                    required
                    type="text"
                    value={login.email}
                    onChange={(e) =>
                      setLogin({ ...login, email: e.target.value })
                    }
                  ></input>
                }
              />

              <LoginInput
                text="Contraseña"
                input={
                  <input
                    required
                    type="text"
                    value={login.password}
                    onChange={(e) =>
                      setLogin({ ...login, password: e.target.value })
                    }
                  ></input>
                }
              />
            </div>
            <div className="buttons-container">
              <div className="recupera-contrasenia">
                <a href="#" className="link-contraseña">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="button-iniciarsesion">
                <PrimaryButton name="Iniciar sesión" />
              </div>

              <div className="container-link-registrarse">
                <h4>¿No tienes cuenta?</h4>
                <div className="register-button-container">
                  <RegisterButton text="Registrate aquí" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
