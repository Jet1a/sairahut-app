"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json);

const DynamicPage = ({ params }: { params: { slug: string } }) => {
  const routers = useRouter();
  const { slug } = params;
  const { data, error } = useSWR(
    slug ? `/api/datas?slug=${slug}` : null,
    fetcher
  );

  if (error) {  return <div>Error loading data</div>; }
  if (!data) {return <div>Loading...</div>;}

  return(
    <div>
        <h1>Data for Slug: {slug}</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  )
};
