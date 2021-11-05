import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { removerItemLocalStorage } from "../localStorage/LocalStorage";

const sendMail = (
  campos,
  message,
  platillos,
  handleRemoveAllItems,
  initicializarInput
) => {
  console.log(campos);
  console.log(message);

  const tempParams = {
    from_name: "SAL&SALSA - RESTAURANTE + RUMBA + EVENTO",
    to_name: campos.to_name,
    correo: campos.correo,
    message: message,
    cc: campos.correo,
  };
  console.log(platillos);

  emailjs
    .send(
      "service_2sk9bcd",
      "template_1npjc4n",
      tempParams,
      "user_fQNx4MRlCaB3m9PGBDeOj"
    )
    .then((res) => {
      console.log("success", res.status);
      Swal.fire("SE ENVIO EL CORREO CON EXITO", "", "success");
      removerItemLocalStorage("platillos");
      handleRemoveAllItems();
      initicializarInput();
    });
};

export { sendMail };
