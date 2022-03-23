import './style.css';
import Play from '../../assets/play.svg';
import Pause from '../../assets/pause.svg';
import Next from '../../assets/next.svg';
import Previous from '../../assets/previous.svg';
import Stop from '../../assets/stop.svg';
import { useRef } from 'react';

function Controls({
    audioRef,
    currentMusic,
    iconBtn,
    setIconBtn,
    handleChangeMusic
}) {

    let intervalProgress = null;

    const progressRef = useRef(null)


    function playPause() {

        intervalProgress = setInterval(() => {

            if (audioRef.current.paused) {
                clearInterval(intervalProgress);
            }

            const duration = audioRef.current.duration / 60;
            const currentProgres = ((audioRef.current.currentTime / 60) * 100 / duration);

            progressRef.current.style.width = `${currentProgres}%`;

        }, 1000);

        if (audioRef.current.paused) {
            audioRef.current.play();
            setIconBtn('pause');
            return;
        }

        audioRef.current.pause();
        setIconBtn('play');
    }


    function stop() {
        setIconBtn('play');
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

    return (
        <div className='container-controls'>
            <div className='preview-names'>
                <h2>{currentMusic.title}</h2>
                <strong>{currentMusic.artist}</strong>
            </div>
            <div className='container-player'>
                <div className='container-buttons'>
                    <img
                        src={Stop}
                        alt=""
                        className='btn-control'
                        onClick={() => stop()}
                    />
                    <img
                        src={Previous}
                        alt=""
                        className='btn-control'
                        onClick={() => handleChangeMusic('previous')}
                    />
                    <img
                        src={iconBtn === 'pause' ? Pause : Play}
                        alt=""
                        className='btn-play-pause'
                        onClick={() => playPause()}
                    />
                    <img
                        src={Next}
                        alt=""
                        className='btn-control'
                        onClick={() => handleChangeMusic('next')}
                    />
                </div>
                <div className='container-progress'>
                    <strong className='start'>0</strong>
                    <div className='container-line'>
                        <div className='progress-line'></div>
                        <div
                            className='progress-line-color'
                            ref={progressRef}
                        >
                        </div>
                    </div>
                    <strong className='end'>3:45</strong>
                </div>
            </div>
            <div className='empty'>

            </div>

        </div>
    )
}

export default Controls;