import ListProducts from '@/components/ListProducts'
import React from 'react'
import { getClient } from '../../graphql/ApolloClient'
import { GET_ALL_PRODUCTS } from '@/graphql/ApolloOperations'

export default async function Products() {

  const { data } = await getClient().query({query: GET_ALL_PRODUCTS});

  return (
    <div>
      <ListProducts data={data.getAllProducts} />
    </div>
  )
}
