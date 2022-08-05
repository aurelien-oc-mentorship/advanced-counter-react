import {useState} from "react";
import styles from './Collapse.module.css'
export default function Collapse(props) {
	//const {title, children} = props
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen( oldOpen => {
			return !oldOpen
		})
	}
	const eltStyle = open ? styles.open : styles.closed
	return (
		<article>
			<h3 onClick={handleClick} className={eltStyle}>{props.title}</h3>
			{open ? <p>{props.children}</p> : null}

		</article>
	)
}
