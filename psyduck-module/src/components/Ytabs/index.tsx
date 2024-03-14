import { useEffect } from "react"
import styles from "../../style/Ybutton.module.less"
const Ytabs = () => {
	interface Ytabs {
		test: number
	}
	useEffect(()=>{
		identity(1)
	},[])
	function identity<T extends number>(arg: T): T {
		return arg; 
	 }
	return <div>
	</div>
}
