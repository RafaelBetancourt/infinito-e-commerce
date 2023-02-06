import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">

      <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <a className="box-info" href="https://wa.me/+51917341261/?text=Hola, me gustaria tener mas informacion sobre sus producutos!" target="_blank">
              <div className="info-image">
              <img src="/images/wa.gif" className="info-image" />
                {/* <i className="fas fa-fax"></i> */}
              </div>
              <h5>Whatsapp</h5>
              <p>917 341 261</p>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <a className="box-info" href="https://www.google.com/maps/place/Infinito/@-16.3751375,-71.5576762,19.17z/data=!4m6!3m5!1s0x91424a10f968efd1:0x37515a421188c0b8!8m2!3d-16.3748617!4d-71.5571713!16s%2Fg%2F11fj3dhrb5" target="_blank">
              <div className="info-image">
              <img src="/images/ubicacion.gif" className="info-image" />
                {/* <i className="fas fa-map-marker-alt"></i> */}
              </div>
              <h5>Ubicacion</h5>
              <p>Infinito</p>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <a className="box-info" href="mailto:infinito@gmail.com?Subject=Buenos%20dias%20" target="_blank">
              <div className="info-image">
                <img src="/images/email.gif" className="info-image" />
                {/* <i className="fas fa-phone-alt"></i> */}
              </div>
              <h5>Correo</h5>
              <p>infinitogmail.com</p>
            </a>
          </div>
        </div>

        <div className="col-12 col-md-3 contact-Box">
          <div className="box-info">
            <a className="box-info" href="/" >
              <div className="info-image">
              <img src="/images/shopping.gif" className="info-image" />
                {/* <i className="fas fa-fax"></i> */}
              </div>
              <h5>Compremos</h5>
              <p>o sigue agregando</p>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactInfo;
