import { selector } from 'recoil';

import { EditByCssAtom, EditByHtmlAtom, IncludeButtonsIdState } from '../atoms';
import { controllerList } from '@/data';

export const AddedClass= selector({
	key: 'add-class',
	get: ({get}) => {
		const droppedButtonsId= get(IncludeButtonsIdState);
		let newClasses = '';
		
		{ controllerList
				.filter(({id}) => droppedButtonsId.includes(id))
				.map(({defaultStyle})=> 
					newClasses+= `${defaultStyle}`
				)
		}
		return newClasses;
	},
	set: ({set}, droppedButtonsId) => {
		let newClasses = '';
		
		{ controllerList
			.filter(({id}) => droppedButtonsId.includes(id))
			.map(({defaultStyle})=> 
				newClasses+= `${defaultStyle}`
			)
		}
		set(EditByCssAtom, newClasses);
	}
});

export const AddedTags= selector({
	key: 'add-tag',
	get: ({get}) => {
		const droppedButtonsId= get(IncludeButtonsIdState);
		let newTags = '';
		{ controllerList
				.filter(({id}) => droppedButtonsId.includes(id))
				.map(({className, svgIconTag})=> 
					newTags+= `<button id="${className}"><span>${svgIconTag.replace(/'/g, '')}</span></button>\n`
				)
		}
		return newTags;
	},
	set: ({set}, droppedButtonsId) => {
		let newTags = '';
		{ controllerList
				.filter(({id}) => droppedButtonsId.includes(id))
				.map(({className, svgIconTag})=> 
					newTags+= `<button id="${className}"><span>${svgIconTag.replace(/'/g, '')}</span></button>\n`
				)
		}
		set(EditByHtmlAtom,newTags);
	}
})