import React, { useState, useEffect } from 'react'
import "./leftMenu.css"
import axios from 'axios'

export default function LeftMenu() {
    const [options1, setOptions1] = useState<any>([])
    const [options2, setOptions2] = useState<any>([])
    useEffect(() => {
        axios.get("https://run.mocky.io/v3/6102c1b2-254f-4b7c-addb-67d4df752866")
            .then((resp: any) => {
                setOptions1(resp?.data?.reference?.descriptions)
                setOptions2(resp?.data?.reference?.titles)
            });
    }, [])
    return (
        <div className='left_menu'>
            <div className='top'>
                <div>
                    <h2>Выберите адрес на карте</h2>
                </div>
                <div className="chosen_address">
                    <h3>Адрес: Не выбран</h3>
                </div>
                <div >
                    <select name="sel_1" id="1" className="select_1">
                        {options1.length && options1.map((item: any, i: number) => {
                            return (
                                <option key={i} value={item.id}>{item.name}</option>
                            )
                        })}

                    </select>
                </div>
                <div >
                    <select name="sel_2" id="2" className="select_2">
                        {options2.length && options2.map((item: any, i: number) => {
                            return (
                                <option key={i} value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="add">
                Добавить
            </div>
        </div>
    )
}
