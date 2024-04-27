import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <HomepageHeader/>
            <main>
                {/*<HomepageFeatures/>*/}
                <div className="section_rC2D sectionAlt_XiGz">
                    <div className="container">
                        <div className="row tweetsSection_Fqsy">
                            <div className="col col--4">
                                <div className="card tweet_x2tn">
                                    <div className="card__header">
                                        <div className="avatar">
                                            {/*<img alt="Mark Erikson" className="avatar__photo"*/}
                                            {/*                         src="https://unavatar.io/twitter/acemarke?fallback=https://github.com/markerikson.png"*/}
                                            {/*                         width="48" height="48" loading="lazy"/>*/}
                                            <div className="avatar__intro tweetMeta_fAxr"><strong
                                                className="avatar__name"><a
                                                href="https://github.com/foldright/auto-pipeline" target="_blank">Auto
                                                Pipeline</a></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body tweet_x2tn">
                                        🚀 auto-pipeline is a source code generator that auto generate the component's
                                        pipeline.
                                    </div>
                                    <div className="card__footer"><a
                                        href="https://github.com/foldright/auto-pipeline" target="_blank"
                                        rel="noopener noreferrer" className="tweetMeta_fAxr">Github</a></div>
                                </div>

                                <div className="card tweet_x2tn">
                                    <div className="card__header">
                                        <div className="avatar">
                                            <div className="avatar__intro tweetMeta_fAxr"><strong
                                                className="avatar__name"><a href="https://github.com/foldright/bash-buddy" target="_blank">bash-buddy
                                            </a></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body tweet_x2tn">
                                        🚼 Bash Buddy(aka. BaBy) contains bash libs and tools that extracted from CI scripts of my projects.
                                    </div>
                                    <div className="card__footer"><a
                                        href="https://github.com/foldright/bash-buddy" target="_blank"
                                        rel="noopener noreferrer" className="tweetMeta_fAxr">Github</a></div>
                                </div>
                            </div>
                            <div className="col col--4">
                                <div className="card tweet_x2tn">
                                    <div className="card__header">
                                        <div className="avatar">
                                            <div className="avatar__intro tweetMeta_fAxr"><strong
                                                className="avatar__name"><a
                                                href="https://github.com/foldright/cffu"
                                                target="_blank">cffu</a></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body tweet_x2tn">
                                        🦝 Java CompletableFuture Fu(aka CF-Fu, pronounced "Shifu"), a tiny sidekick
                                        library to improve user experience and reduce misuse.
                                    </div>
                                    <div className="card__footer"><a
                                        href="https://github.com/foldright/cffu" target="_blank"
                                        rel="noopener noreferrer" className="tweetMeta_fAxr">Github</a></div>
                                </div>
                            </div>
                            <div className="col col--4">
                                <div className="card tweet_x2tn">
                                    <div className="card__header">
                                        <div className="avatar">
                                            <div className="avatar__intro tweetMeta_fAxr"><strong
                                                className="avatar__name"><a
                                                href="https://github.com/foldright/inspectable-wrappers"
                                                target="_blank">inspectable-wrappers</a></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card__body tweet_x2tn">
                                        🪐 Inspectable Wrappers Specification, provides the interfaces to make wrapper instances as an inspectable wrapper chain.
                                    </div>
                                    <div className="card__footer"><a
                                        href="https://github.com/foldright/inspectable-wrappers" target="_blank"
                                        rel="noopener noreferrer" className="tweetMeta_fAxr">Github</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    );
}
