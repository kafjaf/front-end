import Head from "next/head"

//les infos attendus dans le composant
interface Props {
    title? : string, // avec le ? peut être optionnel
    description : string
}


// composant fonction fléchée noeud balise vide | fonction
export const Seo = ({title, description} : Props) => {
    return (
              <Head>
                <title> {title}</title>
                <meta 
                    name="description"
                    content= {description}
                />

                {/* information standard */}
                <meta 
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>  
    )
}