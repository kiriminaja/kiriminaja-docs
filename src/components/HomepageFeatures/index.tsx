import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cash on Delivery',
    Svg: require('@site/static/img/cod.svg').default,
    description: (
      <>
          Integrate with easy Cash on Delivery solutions. Single account for multiple purpose.
      </>
    ),
  },
  {
    title: 'Easy to Integrate',
    Svg: require('@site/static/img/uang.svg').default,
    description: (
      <>
          Designed from the ground up to be easily integrate your website with +15 expeditions.
      </>
    ),
  },
  {
    title: 'Focus on Your Business',
    Svg: require('@site/static/img/transaksi.svg').default,
    description: (
      <>
          KiriminAja lets you to focus on your main business, let us #BantuMenujuLebihMaju
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
