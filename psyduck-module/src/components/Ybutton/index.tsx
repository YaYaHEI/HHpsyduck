import React from "react"
import {Button} from 'antd'
interface Pbuton{
    type:string
}
export default function Ybutton(props: Pbuton) {

    let onChange = () => {

    }
	return (
        <div>
            <button>确定</button>
            <Button>确定</Button>
        </div>
    )
}
