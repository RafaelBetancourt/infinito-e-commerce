import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Necesitas asesoramiento?</h2>
              <p>Registrate y recibe los mejores tips.</p>
              <form className="form-section">
                <input placeholder="Tu correo..." name="email" type="email" />
                <input value="Si, yo quiero!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
