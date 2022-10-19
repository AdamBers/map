import React from 'react'
import { YMaps, Map  } from "react-yandex-maps"

export default function YandexMap() {
    return (
        <YMaps>
            <div>My awesome application with maps!</div>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </YMaps>
    );
}