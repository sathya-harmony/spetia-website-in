import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section capacity">
      <div className="container-narrow">
        <p className="eyebrow">404</p>
        <h1 className="page-title">This page is not part of the site.</h1>
        <p className="lead">Studio Spetia has five pages. The work starts from the home page.</p>
        <Link className="text-link" href="/">
          Go home -&gt;
        </Link>
      </div>
    </section>
  );
}
