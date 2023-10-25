import { fetchItem, fetchItems, APIParams } from '@/util/umbracoContentDeliveryAPI';
import { draftMode } from 'next/headers'
import React from 'react'
export const dynamicParams = false;


interface ContentProps {
  body: string,
  title: string
}



export default async function ContentPage({
  params,
}: {
  params: { path: string[] };
}) {

  let path = params.path.join("/");
  const { isEnabled } = draftMode();
  var data = await fetchItem(path, "");
  var contentProps: ContentProps = data.properties;

  return (<>
    <div>{contentProps.title}</div>
    {isEnabled &&
      <h3>DraftMode is isEnabled</h3>
    }
  </>
  );
}



export async function generateStaticParams() {
  const params: APIParams = {
    expand: "",
    filter: "",
    skip: "1",
    take: ""
  };
  const contentPages = await fetchItems(params);


  const paths = contentPages.items.map((item: any) => {
    const route: string = item.route.path.replace("/", "").slice(0, -1);
    const resultArray = route.split('/');
    let pathObj: { path: string[] } = {
      path: resultArray
    }
    return pathObj;
  });

  return paths;
}