

/**
 * The default configuation for the ParticleField component
 *
 * Any option passed in via props will overwrite the default config
 */




// export const config = {


//     // Display reference cube, useful for orienting the field
//     showCube: false,
//     // '2D' or '3D' particle field
//     dimension: '3D',
//     // 'bounce' or 'passthru'
//     // 'bounce' will make particles behave like balls thrown at a wall when hitting canvas boundaries
//     // 'passthru' particles will disappear after hitting canvas boundaries and be added back into the scene elsewhere
//     boundaryType: 'passthru',
//     // Maximum velocity of particles
//     velocity: 0.2,
//     // Toggles antialiasing -- must be set during construction, cannot be changed after initial render
//     // Slight performance optimization to set false, although lines will appear more jagged
//     antialias: false,
//     // Min/Max multipliers which constraint how particles move in each direction
//     // The default values here allow for particles to move in completely random x, y, z directions
//     // See the "Snowfall" preset for an example of how to use these values
//     direction: {
//         xMin: 1,
//         xMax: -1,
//         yMin: -1,
//         yMax: 1,
//         zMin: 1,
//         zMax: 1
//     },
//     lines: {
//         // 'rainbow' or 'solid' color of lines
//         colorMode: 'solid',
//         // Color of lines if colorMode: 'solid', must be hex color
//         color: '#fc030b',
//         // Transparency of lines
//         transparency: 0.3,
//         // true/false limit the maximum number of line connections per particle
//         limitConnections: true,
//         maxConnections: 450,
//         // Minimum distance needed to draw line between to particles
//         minDistance: 400,
//         // true/false render lines
//         visible: false,
//     },
//     particles: {
//         // 'rainbow' or 'solid' color of particles
//         colorMode: 'solid',
//         // Color of lines if colorMode: 'solid', must be hex color
//         color: '#fc030b',
//         // Transparency of particles
//         transparency: 0.4,
//         // 'square' or 'circle' shape of particles
//         shape: 'circle',
//         // The exact number of particles to render
//         count: 385,
//         // The minimum particle size
//         minSize: 6,
//         // The maximum particle size
//         maxSize: 45,
//         // true/false render particles
//         visible: true
//     },
//     /*
//      * The camera rig is comprised of Three.js OrbitControls
//      * Pass any valid OrbitControls properties, consult docs for more info
//      *
//      * https://threejs.org/docs/#examples/controls/OrbitControls
//      */
//     cameraControls: {
//         // Enable or disable all camera interaction (click, drag, touch etc)
//         enabled: true,
//         // Enable or disable smooth dampening of camera movement
//         enableDamping: true,
//         dampingFactor: 0.9,
//         // Enable or disable zooming in/out of camera
//         enableZoom: false,
//         // Enable or disable constant rotation of camera around scene
//         autoRotate: true,
//         // Rotation speed -- higher is faster
//         autoRotateSpeed: 1.5,
//         // If true, camera position will be reset whenever any option changes (including this one)
//         // Useful when turning off autoRotate, the camera will return to FOV where scene fits to canvas
//         resetCameraFlag: false
//     }
import React from 'react';
import ParticleField from 'react-particles-webgl';
import { usePlay } from '../../context/PlayContext'
// };

let colorHelper = (valence) => {
    if (valence <= 0.15) {
        return "#fc030b"
    }
    if (valence > 0.15 && valence <= 0.25) {
        return "#d100ca"
    }
    if (valence > 0.25 && valence <= 0.5) {
        return "#5632a8"
    }
    if (valence > 0.5 && valence <= 0.75) {
        return "#ba8330"
    }
    if (valence > 0.75) {
        return "#30b5ba"
    }

}

export default () => {
    const { playCtxt } = usePlay()


    const config = {


        // Display reference cube, useful for orienting the field
        showCube: false,
        // '2D' or '3D' particle field
        dimension: '3D',
        // 'bounce' or 'passthru'
        // 'bounce' will make particles behave like balls thrown at a wall when hitting canvas boundaries
        // 'passthru' particles will disappear after hitting canvas boundaries and be added back into the scene elsewhere
        boundaryType: 'passthru',
        // Maximum velocity of particles
        velocity: playCtxt ? playCtxt.energy * 2 : 0.2,
        // Toggles antialiasing -- must be set during construction, cannot be changed after initial render
        // Slight performance optimization to set false, although lines will appear more jagged
        antialias: false,
        // Min/Max multipliers which constraint how particles move in each direction
        // The default values here allow for particles to move in completely random x, y, z directions
        // See the "Snowfall" preset for an example of how to use these values
        direction: {
            xMin: 1,
            xMax: -1,
            yMin: -1,
            yMax: 1,
            zMin: 1,
            zMax: 1
        },
        lines: {
            // 'rainbow' or 'solid' color of lines
            colorMode: 'solid',
            // Color of lines if colorMode: 'solid', must be hex color
            color: playCtxt ? colorHelper(playCtxt.valence) : '#fc030b',
            // Transparency of lines
            transparency: 0.3,
            // true/false limit the maximum number of line connections per particle
            limitConnections: true,
            maxConnections: playCtxt ? playCtxt.energy * 300 : 400,
            // Minimum distance needed to draw line between to particles
            minDistance: playCtxt ? playCtxt.energy * 300 : 400,
            // true/false render lines
            visible: true,
        },
        particles: {
            // 'rainbow' or 'solid' color of particles
            colorMode: 'solid',
            // Color of lines if colorMode: 'solid', must be hex color
            color: playCtxt ? colorHelper(playCtxt.valence) : '#fc030b',
            // Transparency of particles
            transparency: 0.3,
            // 'square' or 'circle' shape of particles
            shape: playCtxt ? playCtxt.key === 0 ? 'square' : 'circle' : "circle",
            // The exact number of particles to render
            count: playCtxt ? playCtxt.energy * 400 : 385,
            // The minimum particle size
            minSize: playCtxt ? playCtxt.valence * 10 : 6,
            // The maximum particle size
            maxSize: playCtxt ? playCtxt.valence * 50 : 45,
            // true/false render particles
            visible: true
        },
        /*
         * The camera rig is comprised of Three.js OrbitControls
         * Pass any valid OrbitControls properties, consult docs for more info
         *
         * https://threejs.org/docs/#examples/controls/OrbitControls
         */
        cameraControls: {
            // Enable or disable all camera interaction (click, drag, touch etc)
            enabled: false,
            // Enable or disable smooth dampening of camera movement
            enableDamping: true,
            dampingFactor: 0.9,
            // Enable or disable zooming in/out of camera
            enableZoom: false,
            // Enable or disable constant rotation of camera around scene
            autoRotate: true,
            // Rotation speed -- higher is faster
            autoRotateSpeed: playCtxt ? playCtxt.tempo / 77 : 1,
            // If true, camera position will be reset whenever any option changes (including this one)
            // Useful when turning off autoRotate, the camera will return to FOV where scene fits to canvas
            resetCameraFlag: false
        }
    };

    return (
        <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
            <ParticleField config={config} />
        </div>

    )

}
    ;