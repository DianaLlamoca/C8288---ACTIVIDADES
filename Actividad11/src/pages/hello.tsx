//Se importa el tipo NextPage para indicar que es una página 
//de nextjs, de tal forma que se puedan incluir propiedades específicas de las páginas de nextjs
//como getStaticProps, etc...
import type {NextPage} from "next";

//Importo componentes específicos de nextjs para usarlos en la página
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hello:NextPage=()=>{
    return(
        <div>
            <Head>
                <title>Título de página Hola Mundo</title>
                <meta property="og:title" content="Hello World" key="title"/>
            </Head>
            <div>Hello World!</div>
            <div>
                <Link href="/components/weather">pagina interna</Link>
                <Image src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
                />
            </div>
        </div>
    );
};

//Exporto el componente
export default Hello;


