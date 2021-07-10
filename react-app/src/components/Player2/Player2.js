import React, { useState, useRef } from 'react';

import Sound, {
    Osciloscope,
    Volume,
    Equalizer
} from 'react-hifi'

import { usePlay } from '../../context/PlayContext'

export default function Player2() {
    const { playCtxt } = usePlay()
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

    return (
        <div>
            <Sound
                url={playCtxt}
                playStatus={state.status}
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
                {/* <Equalizer /> */}
                <Volume value={80} />
                <button onClick={() => setState({ ...state, status: Sound.status.PLAYING })}>PLAY</button>
                {/* <button onCLick={() => setState({ ...state, status: Sound.status.PAUSED })}> PAUSE</button> */}
                {/* <button onClick={() => setState({ ...state, status: Sound.status.STOPPED })}> STOP</button> */}
            </Sound>
            <div>
                <canvas style={{ position: "fixed", left: "224px", width: '100%', height: '94px', bottom: "94px", cursorEvents: "none", zIndex: "-1", borderRadius: "500px" }} ref={canvasElement} />
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

