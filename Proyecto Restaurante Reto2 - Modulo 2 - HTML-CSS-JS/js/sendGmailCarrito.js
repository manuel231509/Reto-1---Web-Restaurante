(() => {
  emailjs.init("user_fQNx4MRlCaB3m9PGBDeOj");
})();
console.log("QNO AUTO COMPLETA");

const sendMail = (campos) => {
  const tempParams = {
    from_name: "SAL&SALSA - RESTAURANTE + RUMBA + EVENTO",
    to_name: campos.to_name,
    correo: campos.correo,
    message: campos.message,
    cc: campos.correo,
  };
  emailjs
    .send("service_2sk9bcd", "template_1npjc4n", tempParams)
    .then((res) => {
      console.log("success", res.status);
    });
};
