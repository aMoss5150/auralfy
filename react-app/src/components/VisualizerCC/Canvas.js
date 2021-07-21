import React, { Component } from 'react';
import './CanvasCC.css'



let ctx, center_x, center_y, radius, x_end, y_end, bar_height;
const width = window.innerWidth;
const height = window.innerHeight;
const bars = 555;
const bar_width = 1;
radius = 0;
center_x = width / 2;
center_y = height / 2;

class Canvas extends Component {
    constructor({ songFile }) {
        super({ songFile });
        this.audio = new Audio(songFile)
        this.audio.crossOrigin = "anonymous";
        this.canvas = React.createRef()
    }

    componentDidMount() {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.source = this.context.createMediaElementSource(this.audio);
        this.analyser = this.context.createAnalyser();
        this.source.connect(this.analyser);
        this.analyser.connect(this.context.destination);
        this.frequency_array = new Uint8Array(this.analyser.frequencyBinCount);
        this.rafId = requestAnimationFrame(this.tick);
        // this.audio.play()
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId);
        this.analyser.disconnect();
        this.source.disconnect();
    }
    tick = () => {
        this.animationLooper(this.canvas.current);
        this.analyser.getByteTimeDomainData(this.frequency_array);
        this.rafId = requestAnimationFrame(this.tick);
    }

    animationLooper(canvas) {
        if (!canvas) return null
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        for (var i = 0; i < bars; i++) {
            //divide a circle into equal part
            const rads = Math.PI * 2 / bars * 2;
            // Math is magical
            bar_height = this.frequency_array[i] * 2;
            const x = center_x + Math.cos(rads * i) * (radius);
            const y = center_y + Math.sin(rads * i) * (radius);
            x_end = center_x + Math.cos(rads * i) * (radius + bar_height);
            y_end = center_y + Math.sin(rads * i) * (radius + bar_height);
            //draw a bar
            this.drawBar(x, y, x_end, y_end, this.frequency_array[i], ctx, canvas);
        }

        //alternate need to figure out how to implement this to use the OSCILOSCOPE
        // if (!ctx) {
        //     ctx = canvasElement.current.getContext('2d');
        // }

        // ctx.fillStyle = 'white';
        // ctx.fillRect(0, 0, canvasElement.current.width, canvasElement.current.height);

        // ctx.lineWidth = 2;
        // ctx.strokeStyle = 'green';

        // ctx.beginPath();

        // const [x, y] = data.pop();
        // ctx.moveTo(x, y);

        // data.forEach(([x, y]) => ctx.lineTo(x, y));

        // ctx.lineTo(canvasElement.current.width, canvasElement.current.height / 2);
        // ctx.stroke();
    }

    drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) {
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

    togglePlay(stop) {
        if (stop) {
            this.audio.pause();
            // this.render()
            // this.forceUpdate();//
            this.audio.load()
            // this.audio.play()
            // this.audio.position = 0;
            return
        }
        if (this.audio.paused) {
            this.audio.play();
            this.rafId = requestAnimationFrame(this.tick);
        } else {
            this.audio.pause();
            cancelAnimationFrame(this.rafId);
        }
    }

    render() {
        if (!this.audio) return null
        return (<>
            <button className="toggle__play headers__colors2" onClick={() => this.togglePlay()}>Play/Pause</button>
            <button className="stop__button headers__colors2" onClick={() => this.togglePlay("stop")}>Stop</button>
            <canvas className="canvas__skin" ref={this.canvas} />
        </>);
    }
}

export default Canvas;