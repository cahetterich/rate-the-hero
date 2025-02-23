import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./screens/Search";
import { Details } from "./screens/Details";
import { NotFound } from "./screens/NotFound";
import { NormalizeStyles } from './shared/NormalizeStyles';

export function App() {
	return (
		<>
			<NormalizeStyles />
			<BrowserRouter>
				<Switch>
					<Route path="/detalhes/:id" exact>
						<Details />
					</Route>
					<Route path="/" exact>
						<Search />
					</Route>
					<Route path="*">Página não encontrada</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}
