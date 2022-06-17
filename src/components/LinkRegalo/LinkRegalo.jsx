import {React, useState, useRef} from 'react';
import './LinkRegalo.css';

const LinkRegalo = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const parentRef = useRef();

    return (
            <div className='regalo'>
                <h2 className="linkcbu">Link de Regalo</h2>
                <div className='collapsable'>
                    <button className='toggle' onClick={() => setIsOpen(!isOpen)}>Ver datos bancarios</button>
                    <div 
                    className='infobanco-parent' 
                    ref={parentRef} 
                    style={
                        isOpen 
                        ? {
                        height: '75px',
                        textAlign: 'left',
                    } 
                    : {
                        height: '0px',
                        padding: '0px',
                        border: '0px',
                    }
                }
                    >
                        <div className="infobanco"><p>Banco:</p><p>Alias:</p><p>Titular:</p></div>
                    </div>
                </div>
            </div>
    );
};

export default LinkRegalo;
