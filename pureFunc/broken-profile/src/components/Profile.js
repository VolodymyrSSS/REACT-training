import Panel from './Profile';
import { Header } from './Header.js';
import { Avatar } from './Avatar.js';

// let currentPerson;

// export default function Profile({ person }) {
// 	currentPerson = person;
// 	return (
// 		<Panel>
// 			<Header />
// 			<Avatar />
// 		</Panel>
// 	);
// }

// function Header() {
// 	return <h1>{currentPerson.name}</h1>;
// }

// function Avatar() {
// 	return (
// 		<img
// 			className='avatar'
// 			src={getImageUrl(currentPerson)}
// 			alt={currentPerson.name}
// 			width={50}
// 			height={50}
// 		/>
// 	);
// }

/*
  The problem is that the Profile component writes to a preexisting 
  variable called currentPerson, and the Header and Avatar components 
  read from it. This makes all three of them impure and difficult to 
  predict.
  To fix the bug, remove the currentPerson variable. Instead, pass all
  information from Profile to Header and Avatar via props. You’ll need
  to add a person prop to both components and pass it all the way down.
  Remember that React does not guarantee that component functions will 
  execute in any particular order, so you can’t communicate between them
  by setting variables. All communication must happen through props.
  As well, in order to optimise, Header and Avatar components were 
  separated to follow React paradigma for components.
*/

export default function Profile({ person }) {
	return (
		<Panel>
			<Header person={person} />
			<Avatar person={person} />
		</Panel>
	);
}
