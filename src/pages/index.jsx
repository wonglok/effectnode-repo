import useSWR from 'swr'
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb'
const fetcher = (url) => fetch(url).then((res) => res.json())

function YoApp() {
  const { data, error } = useSWR('/api/item?id=falala', fetcher)

  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'
  return <code>{JSON.stringify(unmarshall(data), null, 2)}</code>
}

export default function Inedx() {
  return (
    <>
      {/*  */}

      <YoApp></YoApp>

      {/*  */}
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Landing' } }
}
