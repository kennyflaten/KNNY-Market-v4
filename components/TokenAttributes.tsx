import Link from 'next/link'
import formatUrl from 'lib/formatUrl'
import { paths } from '@reservoir0x/client-sdk'

type Props = {
  token: NonNullable<
    paths['/tokens/details/v3']['get']['responses']['200']['schema']['tokens']
  >[0]['token']
}

const TokenAttributes = ({ token }: Props) => {
  return (
    <article className="col-span-full rounded-md border-[2px] border-gray-200 bg-white p-6">
      <p className="reservoir-h5 mb-4">Attributes</p>
      <div className="grid grid-cols-3 gap-2">
        {token?.attributes?.map(({ key, value }) => (
          <Link
            key={`${key}-${value}`}
            href={`/collections/${token?.collection?.id}?${formatUrl(
              `attributes[${key}]`
            )}=${formatUrl(`${value}`)}`}
          >
            <a className="rounded-md border border-gray-200 border-[2px] transition  hover:shadow-md">
              <p className="reservoir-subtitle truncate p-3 text-center capitalize">
                {key}
              </p>
              <p
                className="reservoir-subtitle truncate bg-primary-100 p-3 text-center capitalize"
                title={value}
              >
                {value}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </article>
  )
}

export default TokenAttributes
