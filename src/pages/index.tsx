import { Seo } from "@/ui/components/seo";
// import Head from "next/head";
import React from "react";
// import Button from "@/pages/_document" // import dynamique

export default function Home() {

  return (
          <>
            <Seo title ="Premier Project Next" description="Description..."/>Composant appelé
            <h1> Hello World </h1>
          </>
        );
}
