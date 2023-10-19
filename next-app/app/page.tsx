import Link from 'next/link'
import { fetchItem } from '@/util/umbracoContentDeliveryAPI';


interface HomeProps {
    body: string,
    title: string
}


export default async function Home() {
  var data = await fetchItem("/", "");
  var homeProps : HomeProps = data.properties;

  return (
    <main><h1>{homeProps.title}</h1>
      <p>{homeProps.body}</p>
      <Link href="/users">Users</Link>
    </main>
  )
}