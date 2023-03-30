import React, { useEffect, useState } from "react"
import { Button } from "antd"
import styles from "../../style/Ybutton.module.less"
interface Pbuton {
	type?: string
	size?: string
	onClick?: () => void
	icon: React.ReactElement
	children: React.ReactElement
	disabled: boolean
	danger: boolean
}
const Ybutton: React.FC<Pbuton> = (props) => {
	let { disabled, onClick } = props
	useEffect(() => {
		classSum()
	}, [])

	const classSum = () => {
		let disabledVisible = disabled ? ' ' + styles.disabled : ''
		return styles[props.size ?? "default"] + " " + styles[props.type ?? ""] + disabledVisible
	}

	return (
		<div>
			<button
				className={styles.yButton + " " + classSum()}
				onClick={onClick}
				disabled={disabled}
			>
				{props.icon ? (
					<span>
						<i className="iconfont icon-guanbi"></i>
					</span>
				) : (
					""
				)}
				<span style={props.icon ? { marginInlineStart: "8px" } : {}}>
					{props.children}
				</span>
			</button>
			<Button disabled type="primary">
				测试
			</Button>
		</div>
	)
}
export default Ybutton
