import React, { useState, useRef, useEffect } from 'react';
import Sound, {
    Osciloscope,
    Volume,
} from 'react-hifi'
import Slider from 'react-rangeslider'
import { usePlay } from '../../context/PlayContext'

let canvas = React.createRef()


let ctx, center_x, center_y, radius, x_end, y_end, bar_height;
const width = window.innerWidth;
const height = window.innerHeight;
const bars = 555;
const bar_width = 1;
radius = 0;
center_x = width / 2;
center_y = height / 2;



export default function FullPlayer() {
    const { playCtxt, status, setStatus } = usePlay()
    const [STOPPED, setSTOPPED] = useState(false)
    const [size, setSize] = useState("134px")

    const [state, setState] = useState({
        status: Sound.status.PAUSED,
        loading: false,
        position: 0,
        volume: 100
    });

    const canvasElement = useRef();
    let ctx;

    const handleDataViz = (data) => {
        if (!ctx) {
            ctx = canvasElement.current.getContext('2d');
        }

        for (var i = 0; i < bars; i++) {
            //divide a circle into equal part
            const rads = Math.PI * 2 / bars * 2;

            // Math is magical
            bar_height = data[i] * 2;

            const x = center_x + Math.cos(rads * i) * (radius);
            const y = center_y + Math.sin(rads * i) * (radius);
            x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

            //draw a bar
            // requestAnimationFrame(() => {
            const drawBar = (x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) => {
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, "rgba(161, 184, 166, 1)");
                gradient.addColorStop(1, "rgba(161, 198, 167, 1)");
                ctx.fillStyle = gradient;

                const lineColor = "rgb(" + frequency / 2 + ", " + 184 + ", " + 161 + ")";
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = bar_width;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            drawBar(x, y, x_end, y_end, [1, 3, 5, 2], ctx, canvas);
            // })
        }



    };

    const handleChangeSize = () => {
        if (size === "134px") {
            setSize("100vh")
        } else {
            setSize('134px')
        }
    }

    // animationLooper(canvas) {
    //     if (!canvas) return null
    //     canvas.width = width;
    //     canvas.height = height;

    //     ctx = canvas.getContext("2d");

    //     for (var i = 0; i < bars; i++) {
    //         //divide a circle into equal part
    //         const rads = Math.PI * 2 / bars * 2;

    //         // Math is magical
    //         bar_height = this.frequency_array[i] * 2;

    //         const x = center_x + Math.cos(rads * i) * (radius);
    //         const y = center_y + Math.sin(rads * i) * (radius);
    //         x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
    //         y_end = center_y + Math.sin(rads * i) * (radius + bar_height);

    //         //draw a bar
    //         this.drawBar(x, y, x_end, y_end, this.frequency_array[i], ctx, canvas);
    //     }
    //     drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) {
    //         const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    //         gradient.addColorStop(0, "rgba(161, 184, 166, 1)");
    //         gradient.addColorStop(1, "rgba(161, 198, 167, 1)");
    //         ctx.fillStyle = gradient;

    //         const lineColor = "rgb(" + frequency / 2 + ", " + 184 + ", " + 161 + ")";
    //         ctx.strokeStyle = lineColor;
    //         ctx.lineWidth = bar_width;
    //         ctx.beginPath();
    //         ctx.moveTo(x1, y1);
    //         ctx.lineTo(x2, y2);
    //         ctx.stroke();
    //     }



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
                <Volume value={state.volume} />
                <Osciloscope
                    onVisualisationData={handleDataViz}
                    height={canvasElement.current && canvasElement.current.height}
                    width={canvasElement.current && canvasElement.current.width}
                />
                {/* <button onClick={() => setState({ ...state, position: 0 })}>RESTART</button> */}
                {/* <span>{playCtxt?.name}</span> */}
                {/* <button onClick={() => setSTOPPED(true)}> STOP</button> */}
            </Sound>
            <div className="player2controls fromalbum">
                {/* <button onClick={() => setStatus("PLAYING")}>PLAY</button> */}
                <i onClick={() => state.position - 5 > 0 && setState({ ...state, position: state.position -= 5 })} className="icons fas fa-step-backward"></i>
                <i onClick={() => setStatus("PLAYING")} className={`${status === "PAUSED" || status === "STOPPED" ? "" : "hidden"} icons fas fa-play`}></i>
                <i onClick={(e) => setStatus("PAUSED")} className={`${status === "PLAYING" ? "" : "hidden"} icons fas fa-pause`}></i>
                <i onClick={(e) => setStatus("STOPPED")} className={`icons fas fa-stop`}></i>
                <i onClick={() => setState({ ...state, position: state.position += 5 })} className="icons fas fa-step-forward"></i>
                <button className="fromalbum font-thin" onClick={() => handleChangeSize()}>{size === "134px" ? "XL" : "SM"}</button>
                <i onClick={() => state.volume - 10 >= 0 && setState({ ...state, volume: state.volume -= 10 })} className="volicons fas fa-minus"></i>
                <i onClick={() => state.volume + 10 <= 100 && setState({ ...state, volume: state.volume += 10 })} className="volicons fas fa-plus"></i>



                {/* <Slider className="volslider"
                    min={0}
                    max={100}
                    step={1}
                    value={state.volume}
                    orientation="horizontal"
                /> */}
                {/* <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={Number}
                    orientation={String}
                    reverse={Boolean}
                    tooltip={Boolean}
                    labels={Object}
                    handleLabel={String}
                    format={Function}
                    onChangeStart={Function}
                    onChange={Function}
                    onChangeComplete={Function} /> */}

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
                <canvas className={`${status === "PLAYING" ? "osccanvas" : "hidden"}`} style={{ opacity: size === "134px" ? "0.6" : "1", position: "fixed", left: "224px", width: '100%', height: size, bottom: "70px", cursorEvents: "none", zIndex: "-1" }} ref={canvasElement} />
            </div>
            <span className="pointer githublinks"><a href="https://github.com/aMoss5150/auralfy/wiki">Go to Github Link</a></span>
        </div >
    );
};