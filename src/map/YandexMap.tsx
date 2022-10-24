import React from 'react'
import { YMaps, Map, Button } from "react-yandex-maps"
import "./YandexMap.css"

export default function YandexMap() {
    return (
        <div className="map_page">
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 14 }} width="75vw" height="100vh" >
                    <Button options={{
                        maxWidth: 128,
                        position: {
                            bottom: "80px",
                            left: "45%"
                        },
                        size: "large"
                    }} data={{
                        content: 'Добавить адрес'
                    }}
                    />
                </Map>
            </YMaps>
        </div>
    );
}