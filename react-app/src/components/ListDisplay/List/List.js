import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Song from '../Song/Song'
import Particles from 'react-particles-js'
import "./List.css"

function List({ vibeId, vibeName }) {
    const dispatch = useDispatch()
    const songs = Object.values(useSelector(state => state.songs))
    const relations = useSelector(state => state.relations)[0]
    const relation = relations ? relations[vibeId] : null

    const songsOnList = songs?.filter((song) => {
        if (relation?.includes(song.id)) {
            return song
        }
    })
    if (!vibeId) return null
    if (!songsOnList) return null
    return (
        <div className="list__container">
            <div className="font-thin font-serif">
                #{vibeName}
            </div>
            {songsOnList.map((song) => (
                <Song key={song.id} song={song} />
            ))}
            <Particles style={{ position: "absolute", color: "red", width: "100%", top: "45px" }}
                params={{
                    "fps_limit": 12,
                    "particles": {
                        "collisions": {
                            "enable": false
                        },
                        "number": {
                            "value": 250,
                            "density": {
                                "enable": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 900,
                            "opacity": 0.2
                        },
                        "move": {
                            "speed": 9
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "opacity_min": 0.05,
                                "speed": 4.9,
                                "sync": false
                            },
                            "value": 0.4
                        }
                    },
                    "polygon": {
                        "enable": true,
                        "scale": 0.5,
                        "type": "inline",
                        "move": {
                            "radius": 10
                        },
                        "url": "https://www.rollingstone.com/wp-content/uploads/2019/10/Drake.jpg",
                    },
                    "inline": {
                        "arrangement": "equidistant"
                    },
                    "draw": {
                        "enable": false,
                        "stroke": {
                            "color": "rgb(161, 184, 161);"
                        }
                    }
                }, {
                    "retina_detect": false,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
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
                }} />

        </div>
    )
}

// {
//     songsOnList.map((song) => (
//         <Song song={song} />
//     ))
// }
export default List
