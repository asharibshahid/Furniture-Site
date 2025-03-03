import { createClient } from 'next-sanity'


const client = createClient({
  projectId  : 'v2d5om50',
  dataset : 'production',
  apiVersion : '2023-10-10',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export async function SanityFetch({query, params ={}}:{query:string, params?:any}){
    return  await client.fetch(query, params)
}