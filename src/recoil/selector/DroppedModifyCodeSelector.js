import { selector } from 'recoil';

import { EditByCssAtom, EditByHtmlAtom, IncludeButtonsIdState } from '../atoms';
import { controllerList } from '@/data';

export const DroppedAddClass= selector({
	key: 'add-class',
	get: ({get}) => {
		const droppedButtonsId= get(IncludeButtonsIdState);
		const prevCssState= get(EditByCssAtom);
		let newClasses = '';
		{ controllerList.map(({contents}) => (
			contents
				.filter(({id}) => droppedButtonsId.includes(id))
				.map(({className})=> 
					newClasses+= `\n#${className}{\n}`
				))
			)
		}
		return prevCssState+newClasses;
	},
});

export const DroppedAddTags= selector({
	key: 'add-tag',
	get: ({get}) => {
		const droppedButtonsId= get(IncludeButtonsIdState);
		const prevHtmlState   = get(EditByHtmlAtom);
		let newTags = '';
		{ controllerList.map(({contents}) => (
			contents
				.filter(({id}) => droppedButtonsId.includes(id))
				.map(({className})=> 
					newTags+= `<button id="${className}"></button>`
				))
			)
		}
		return prevHtmlState.replace('<body></body>', `<body>${newTags}</body>`);
	}
})