import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const usr = new User();
const company = new Company();
// console.log(usr);
// console.log(company);

const customMap = new CustomMap('map');

customMap.addMarker(usr);
customMap.addMarker(company);
