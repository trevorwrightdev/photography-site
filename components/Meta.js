import Head from 'next/head'

const Meta = ({title}) => {
  return (
      <Head>
        <meta name='google' content='notranslate' />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  );
};

export default Meta;
