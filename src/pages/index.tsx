import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container xl:w-6/12">
        <Heading as="h1" className="text-xl lg:text-4xl font-bold text--primary">
          #BantuMenujuLebihMaju
        </Heading>
        <p className="text-lg">{siteConfig.tagline}</p>
        <div className="gap-3 grid lg:grid-cols-2 lg:w-2/4 mx-auto justify-center">
          <Link className="button button--primary button--lg" to="/docs">
            Read Docs
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://sandbox.kiriminaja.com"
            target="blank"
          >
            Sandbox Panel
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`API Documentation`}
      description="Connected with more than 15 delivery couriers throughout Indonesia, it's easy to connect your customers with ease. Build your brand and business to move forward. Let's learn the documentation now."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
