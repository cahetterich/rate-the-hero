import { Button } from '../common-components/Button/Button';
import { ButtonLink } from '../common-components/ButtonLink/ButtonLink';
import { Caption } from '../common-components/Caption/Caption';
import { Card } from '../common-components/Card/Card';
import { Description } from '../common-components/Description/Description';
import { Header } from '../common-components/Header/Header';
import { HeadingOne } from '../common-components/HeadingOne/HeadingOne';
import { HeadingTwo } from '../common-components/HeadingTwo/HeadingTwo';
import { SearchField } from '../common-components/SearchField/SearchField';
import {
	SelectField,
	Option,
} from '../common-components/SelectField/SelectField';
import { Subtitle } from '../common-components/Subtitle/Subtitle';
export function Search() {
	return (
		<div>
			<Header />
			<SearchField placeholder="Digite um nome de herói ou heroína" />
			<Button ghost={true}>Buscar</Button>
			<Card>
				<HeadingOne>Heading One</HeadingOne>
				<HeadingTwo>Heading Two</HeadingTwo>
				<div>
					<Subtitle>Subtitle</Subtitle>
				</div>
				<Description>Description</Description>
				<div>
					<Caption>Caption</Caption>
				</div>
			</Card>
			<ButtonLink>Ver Mais</ButtonLink>
			<SelectField placeholder="Nota">
				<Option>Opção 1</Option>
			</SelectField>
		</div>
	);
}