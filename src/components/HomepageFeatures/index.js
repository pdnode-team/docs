import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Open Source",
    description: (
      <>
        Pdnode likes open source projects, and its members have more or less
        participated in the development/maintenance of open source projects.
      </>
    ),
  },
  {
    title: "Appwrite",
    description: (
      <>We use Appwrite to provide services. Appwrite is our partner.</>
    ),
  },
  {
    title: "Modern",
    description: (
      <>
        We use the latest technology to make our service more convenient and
        faster.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
