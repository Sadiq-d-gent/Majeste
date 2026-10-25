import {notFound} from "next/navigation";import {collections,getCollection} from "@/lib/collections";import {PersonalizationStudio} from "@/components/personalization-studio";
export function generateStaticParams(){return collections.map(c=>({slug:c.id}))}
export default async function Personalize({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const collection=getCollection(slug);if(!collection)notFound();return <PersonalizationStudio collection={collection}/>}
