import { ApiInterface, ApiItem } from "@microsoft/api-extractor-model";
import {merge, keyBy} from "lodash";
import { ApiItems } from "../api/getApiItems";
import { isInterface } from "../api/isInterface";

function _getInterfaceMembers(item: ApiInterface, items: ApiItems, membersAccumulator: {[name: string]: ApiItem})  {

    const parentTypes = item.extendsTypes;

    if (parentTypes.length > 0) {
        parentTypes.forEach(parentType => {
            const extendedTypeReferenceIndex = parentType.excerpt.tokens.findIndex(({kind}) => kind === "Reference");
            const extendedTypeReference = parentType.excerpt.tokens[extendedTypeReferenceIndex];
            const extendedApiItem = items.props[extendedTypeReference.text] || items.types[extendedTypeReference.text];
            if (extendedApiItem && isInterface(extendedApiItem)) {
                _getInterfaceMembers(extendedApiItem, items, membersAccumulator);
            }    
        })
    }

    merge(membersAccumulator, keyBy(item.members, "name"));
}

/**
 * Returns an array of all of `item`'s own and inherited members.
 */
export function getInterfaceMembers(item: ApiInterface, items: ApiItems) : ApiItem[] {
    const membersAccumulator: {[name: string]: ApiItem} = {};

     _getInterfaceMembers(item, items, membersAccumulator);

    return Object.values(membersAccumulator);
}