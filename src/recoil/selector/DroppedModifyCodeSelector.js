import { selector } from 'recoil';

import { EditByCssAtom, EditByHtmlAtom, IncludeButtonsIdState } from '../atoms';
import { controllerList } from '@/data';
import { cssStyle } from '@/data';

export const DroppedAddClass= selector({
	key: 'add-class',
	get: ({get}) => {
		const droppedButtonsId= get(IncludeButtonsIdState);
		const prevCssState    = get(EditByCssAtom);
		let newClasses = '';
		
		{ cssStyle
				.filter(({id}) => droppedButtonsId.includes(id))
				.map(({defaultStyle})=> 
					newClasses+= `${defaultStyle}`
				)
		}
		return newClasses;
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
				.map(({className, svgIconTag})=> 
					newTags+= `<button id="${className}"><span>${svgIconTag.replace(/'/g, '')}</span></button>\n`
				))
			)
		}
		return prevHtmlState.replace('<body></body>', `<body>${newTags}</body>`);
	}
})