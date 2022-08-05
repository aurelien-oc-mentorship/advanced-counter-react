import Collapse from "../../components/Collapse/Collapse";

function Home(){
	return(
		<div>
			<h1>Home</h1>
			<h2>FAQ</h2>
			<Collapse size={'half'} title={"Comment ca fonctionne ?"}>
				Vous n'avez qu'à cliquer sur + ou -
			</Collapse>
		</div>
	)
}
export default Home
