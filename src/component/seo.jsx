import { Helmet } from "react-helmet";

export default function SEO() {
  return (
    <Helmet>
      <title>Saffron Scents - Crafted in scent. Defined by Elegance</title>
      <meta
        name="description"
        content="Discover Saffron Scents, where fragrance meets elegance. Crafted with passion, our scents are designed to captivate your senses and elevate your style. Join our waitlist for exclusive access to our upcoming collection."
      />
      <meta
        name="keywords"
        content="Saffron Scents, fragrance, elegance, crafted scents, exclusive collection, waitlist"
      />
      <meta name="author" content="Saffron Scents" />
    </Helmet>
  );
}
