import React, { useState, useRef, useEffect } from 'react';

import Sound, {
    Osciloscope,
    Volume,
    Equalizer
} from 'react-hifi'

import './Player2.css'
import { usePlay } from '../../context/PlayContext'

export default function Player2() {
    const { playCtxt, status, setStatus } = usePlay()
    const [STOPPED, setSTOPPED] = useState(false)
    const [state, setState] = useState({
        status: Sound.status.PAUSED,
        loading: false,
        position: 0,
    });

    const canvasElement = useRef();
    let ctx;

    const handleDataViz = (data) => {
        if (!ctx) {
            ctx = canvasElement.current.getContext('2d');
        }
        if (!canvasElement.current) return null
        ctx.fillStyle = 'rgba(36, 43, 37, 0.7)';

        ctx.fillRect(0, 0, canvasElement.current.width, canvasElement.current.height);

        ctx.lineWidth = 1.3;
        ctx.strokeStyle = 'rgba(161, 184, 161, 0.6)';

        ctx.beginPath();

        const [x, y] = data.pop();
        ctx.moveTo(x, y);

        data.forEach(([x, y]) => ctx.lineTo(x, y));

        ctx.lineTo(canvasElement.current.width, canvasElement.current.height / 4);
        ctx.stroke();
    };

    if (!playCtxt) return null
    // if (STOPPED) return null
    return (
        <div className="headers__colors2">
            <Sound
                url={playCtxt.link}
                playStatus={status}
                position={state.position}
                onFinishedPlaying={() => setState({ ...state, status: Sound.status.STOPPED })}
                onLoad={() => setState({ ...state, loading: false })}
                onLoading={() => setState({ ...state, loading: true })}
                onPlaying={data => setState({ ...state, ...data })}
            >
                <Osciloscope
                    onVisualisationData={handleDataViz}
                    height={canvasElement.current && canvasElement.current.height}
                    width={canvasElement.current && canvasElement.current.width}
                />
                <Volume value={80} />
                {/* <button onClick={() => setState({ ...state, position: 0 })}>RESTART</button> */}
                {/* <span>{playCtxt?.name}</span> */}
                {/* <button onClick={() => setSTOPPED(true)}> STOP</button> */}
            </Sound>
            <div className="player2controls">
                <button onClick={() => setStatus("PLAYING")}>PLAY</button>
                <button onClick={(e) => setStatus("PAUSED")}> PAUSE</button>
                <button onClick={(e) => setStatus("STOPPED")}> STOP</button>
            </div>
            <div className="player2details">
                <span>{playCtxt.name}</span>
                <span
                    className="font-thin">
                    &nbsp;from the album&nbsp;
                </span> <span>
                    {playCtxt.album_name}
                </span>
                <span
                    className="font-thin">
                    &nbsp;by&nbsp;
                </span><span>{playCtxt.artist}</span></div>
            <div>
                <canvas className={`${status === "PLAYING" ? "osccanvas" : "hidden"}`} style={{ opacity: "0.6", position: "fixed", left: "224px", width: '100%', height: '134px', bottom: "70px", cursorEvents: "none", zIndex: "-1" }} ref={canvasElement} />
            </div>
        </div>
    );
};
            // <BasicControls
            //     onPlay={() => setState({ ...state, status: Sound.status.PLAYING })}
            //     onPause={() => setState({ ...state, status: Sound.status.PAUSED })}
            //     onStop={() => setState({ ...state, status: Sound.status.STOPPED })}
            //     duration={state.duration}
            //     position={state.position}
            //     onTimeChange={evt => setState({ ...state, position: Number(evt.target.value) })}
            // />

