import React, {useState, useRef, useEffect} from 'react';
import { Clock, Title } from './Banner-el.js';
import './Banner.css';

const Banner = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const starTimer = () => {
        const countdownDate = new Date("Oct 1, 2022 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0){
                //stop
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }
        , 1000);
    }

    useEffect(() => {
        starTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className='banner'>
            <Title>
                Christian y Tamara
            </Title>
            <Clock>
                <div className="relojPrincipal">
                    <div>
                        <p>{timerDays}</p>
                        <p><small>Días</small></p>
                    </div>
                    <span>:</span>
                    <div>
                        <p>{timerHours}</p>
                        <p><small>Horas</small></p>
                    </div>
                    <span>:</span>
                    <div>
                        <p>{timerMinutes}</p>
                        <p><small>Minutos</small></p>
                    </div>
                    <span>:</span>
                    <div>
                        <p>{timerSeconds}</p>
                        <p><small>Segundos</small></p>
                    </div>
                </div>
            </Clock>
        </div>
    )
};

export default Banner;
