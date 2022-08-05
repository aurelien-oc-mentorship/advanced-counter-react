import CptButton from "../../components/CptButton/CptButton";
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function Compteur(){
	const [compteur, setCompteur] = useState(1)
	const navigate = useNavigate()
	const {startNumber} = useParams()
	const start = startNumber ? parseInt(startNumber,10) : 0


	useEffect(()=> {
		if(isNaN(start)){
			navigate("/404")
		}
		setCompteur(start)}, [])

	return(
		<div className="App Btn">
			{compteur ? <>
				<CptButton
					action={'-'}
					set={setCompteur}/>
				{compteur}
				<CptButton
					action={'+'}
					set={setCompteur}/>
			</> : <p>chargement....</p>
			}

		</div>
	)
}
export default Compteur
