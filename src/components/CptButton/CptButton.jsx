import styles from './CptButton.module.css'
export default function CptButton(props){
	const handleClick = () => {
		props.set(oldCompteur =>{
			if(props.action === '+') {
				return oldCompteur + 1
			}
			return oldCompteur - 1
		})
	}
	return (
		<button
			className={styles.Btn}
			onClick={handleClick}>
			{props.action}
		</button>
	)
}
