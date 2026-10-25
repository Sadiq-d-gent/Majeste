export type CollectionId="sovereign"|"etoile"|"heritage";
export type Collection={id:CollectionId;name:string;subtitle:string;description:string;palette:"noir"|"champagne"|"ivory";motif:string};
export const collections:Collection[]=[
{id:"sovereign",name:"The Sovereign",subtitle:"An expression of timeless grandeur",description:"An invitation with a quietly regal presence. Considered lines, formal typography, and the elegance of a lasting impression.",palette:"noir",motif:"I"},
{id:"etoile",name:"The Étoile",subtitle:"For evenings that deserve to linger",description:"Luminous and intimate. An editorial composition designed for celebrations beneath the stars.",palette:"champagne",motif:"✦"},
{id:"heritage",name:"The Heritage",subtitle:"A quiet celebration of tradition",description:"An invitation that honors the beauty of belonging, with warm tones and understated ceremony.",palette:"ivory",motif:"❦"}
];
export function getCollection(id:string){return collections.find(item=>item.id===id)}
