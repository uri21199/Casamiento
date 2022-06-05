import React from 'react';
import './Lugar.css'

const Lugar = () => {
    return (
        <>
            <div className="lugar">
                <h2 className='dondeCuando'>Donde y cuando</h2>
                <div className='salon'>
                    <div className="info">
                        <h3>Dirección</h3>
                        <p><strong>La Cirila Eventos</strong>, Av. San Martín 761, La Plata, Buenos Aires</p>
                    </div>
                    <div className="info">
                        <h3>Teléfono</h3>
                        <p>+54 11 4891-8981</p>
                    </div>
                    <div className="info">
                        <h3>¿Cuándo?</h3>
                        <p>01 de Octubre de 2022 19:00</p>
                    </div>
                    <a href="https://goo.gl/maps/Qk5i5PwE5ovKMsnx7">Ver mapa</a>
                </div>
                <div className="maps">
                    {/*                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13101.721364672323!2d-58.1928581!3d-34.8202711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2dff6270b9022a4a!2sLa%20Cirila%20Eventos!5e0!3m2!1ses!2sar!4v1653268024206!5m2!1ses!2sar" width="90%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe> */}
                </div>
            </div>

        </>
    )
};

export default Lugar;
