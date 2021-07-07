import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllVibes } from '../../store/vibes'
import { useColor } from '../../context/ColorContext'
import List from '../ListDisplay/List/List'
import Particles from 'react-particles-js'
import './ListDisplay.css'



function ListDisplay({ targetVibe }) {
    const dispatch = useDispatch()
    const { colorCtxt } = useColor()
    const vibes = Object.values(useSelector(state => state.vibes))
    console.log(vibes)

    // useEffect(() => {
    //     dispatch(getAllVibes())
    // }, [])

    if (!targetVibe) return null
    if (!vibes) return null
    return (
        <div className={`listdisplay__container ${colorCtxt === false ? "headers__colors2 centerer" : "headers__colors3 centerer__red"}`}>
            {targetVibe && targetVibe.map((vibe) => (
                <List key={vibe.id} vibeId={vibe.id} vibeName={vibe.name} />
            ))}


            {<Particles id='particles' style={{ position: "absolute", width: "100%", top: "45px", height: "100%", left: "224px", zIndex: "0" }}
                params={{
                    "fps_limit": 16,
                    "particles": {
                        "collisions": {
                            "enable": false
                        },
                        "color": {
                            "value": "random"
                        },
                        "number": {
                            "value": 312,
                            "density": {
                                "enable": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 900,
                            "opacity": 0.1
                        },
                        "move": {
                            "speed": 9
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "opacity_min": 0.05,
                                "speed": 8.6,
                                "sync": false
                            },
                            "value": 0.4
                        }
                    },
                    "polygon": {
                        "enable": true,
                        "scale": 0.5,
                        "type": "inside",
                        "move": {
                            "radius": 10
                        },
                    },
                    "inline": {
                        "arrangement": "equidistant"
                    },

                }, {
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "bubble"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "size": 5,
                                "distance": 40
                            }
                        },
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 5
                        },
                    }
                }} />}
        </ div>
    )
}

// {
// targetVibe.length === 0 && vibes.map((vibe) => (
//     <List key={vibe.id} vibeId={vibe.id} vibeName={vibe.name} />
// ))
// }
export default ListDisplay
