import { fetchItem, fetchItems, APIParams } from '@/util/umbracoContentDeliveryAPI';
import React from 'react'
export const dynamicParams = false;


export default async function ContentPage({
  params,
}: {
  params: {path: string, id: string};
}) {
  return <div>{params.id}</div>;
}



export async function generateStaticParams() {
  const params: APIParams = {
    expand: "",
    filter: "",
    skip: "1",
    take: ""
  };
  const contentPages = await fetchItems(params);

  const paths = contentPages.items.map((item: any) => ({
    path: item.route.path.replace("/", ""),
    id: item.id
  }
  ));

  // return paths;
  return [
    {
      path: "",
      id: "994f7e8b-ca21-4529-a6e9-e1f496b271fc",
    },
    {
      path: "first-blog/",
      id: "71d5cfd5-fa0b-4222-a77d-625837f7359c",
    },
  ];
}