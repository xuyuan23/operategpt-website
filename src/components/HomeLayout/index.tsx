import React, { FC } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './styles.css';
import {
  Tool1,
  Tool2,
  Tool3,
  Tool4,
  Tool5,
  Tool6,
  ToolDev,
  ToolCloud,
  ToolData,
  ToolSecure,
  ToolPerson,
  ToolProduct,
  ToolSystem,
  CommGithub,
  CommWechat,
  CommDiscord,
  CommGithub2,
} from '@site/src/common/icons';
import FeaturedSlider from '@site/src/components/FeaturedSlider';

interface HomepageSectionProps {
  header?: string;
  description?: string;
  className?: string;
}

const HomepageSection: FC<HomepageSectionProps> = (props) => {
  const toKebabCase = (header) =>
    header &&
    header
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map((parts) => parts.toLowerCase())
      .join('-');

  return (
    <div className={clsx('homepage__section', props.className)}>
      <div className='homepage__container'>
        {props.header && (
          <h2 className='homepage__header' id={toKebabCase(props.header)}>
            {props.header}
          </h2>
        )}
        {props.description && (
          <p className='homepage__description'>{props.description}</p>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default function HomeLayout() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <div className='homepage'>
        <FeaturedSlider />

        <HomepageSection header='Abilities' description='Introduction to Framework Capabilities'>
          <div className='about__cards'>
            <Link
              to='docs/README_ZH' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolDev />
                </div>
                <h3 className='about__header'>Multi-Models</h3>
                <p className='about__description'>
                  Support multiply LLMs, such as chatglm, vicuna, Qwen, and proxy of chatgpt and bard.
                </p>
              </div>
            </Link>
            <Link to='docs/README_ZH' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolPerson />
                </div>
                <h3 className='about__header'>Embedding</h3>
                <p className='about__description'>
                  Embed data as vectors and store them in vector databases, providing content similarity search.
                </p>
              </div>
            </Link>
            <Link to='docs/README_ZH' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolData />
                </div>
                <h3 className='about__header'>BI</h3>
                <p className='about__description'>
                  Support multiply scenes, generate images, videos and chapters.
                </p>
              </div>
            </Link>
            <Link to='docs/README_ZH' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolProduct />
                </div>
                <h3 className='about__header'>Knowledge Summary</h3>
                <p className='about__description'>
                  You can do summary based on local documents such as pdf, word, excel and other data.
                </p>
              </div>
            </Link>
            <Link to='docs/README_ZH' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolSecure />
                </div>
                <h3 className='about__header'>Privacy & Secure</h3>
                <p className='about__description'>
                  You can be assured that there is no risk of data leakage, and your data is 100% private and secure.
                </p>
              </div>
            </Link>
          </div>
        </HomepageSection>

        <HomepageSection header='Framework' description='Introduction to Framework'>
          <img src="/img/artificial-intelligence.svg" style={{height: 500}}/>
        </ HomepageSection>

        <HomepageSection header='Contact us'>
          <div className='further__cards'>
            <Link to='/docs/wechat' className='further__card'>
              <div className='further__section'>
                <div className='further__icon'>
                  <CommWechat />
                </div>
                <h3 className='further__header'>
                  Wechat Group
                </h3>
                <p className='further__description'>
                  Welcome to learn and communicate with me.
                </p>
              </div>
            </Link>
            <Link
              to='https://github.com/xuyuan23/operateGPT'
              className='further__card'
            >
              <div className='further__section'>
                <div className='further__icon'>
                  <CommGithub2 />
                </div>
                <h3 className='further__header'>Github</h3>
                <p className='further__description'>
                  Welcome to join us on GitHub and contribute code together.
                </p>
              </div>
            </Link>
          </div>
        </HomepageSection>

      </div>
    </Layout>
  );
}
