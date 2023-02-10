import React from "react"
import {Button} from 'antd'
import styles from '../../style/Ybutton.module.less'
interface Pbuton{
    type:string
}
export default function Ybutton(props: Pbuton) {
    console.log(styles);
    
    
	return (
        <div>
            <button className={styles.yButton} >确定</button>
            <Button>确定</Button>
        </div>
    )
}
