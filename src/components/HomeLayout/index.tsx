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
              to='docs/en/README' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolDev />
                </div>
                <h3 className='about__header'>Multi-Models Supported</h3>
                <p className='about__description'>
                  Support multiply LLMs, such as chatglm, vicuna, Qwen, and proxy of chatgpt and bard.
                </p>
              </div>
            </Link>
            <Link to='docs/en/README' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolPerson />
                </div>
                <h3 className='about__header'>Real-Time Search</h3>
                <p className='about__description'>
                  Support to obtain the latest data and news information from the website
                </p>
              </div>
            </Link>
            <Link to='docs/en/README' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolData />
                </div>
                <h3 className='about__header'>Multiply Scenes</h3>
                <p className='about__description'>
                  Support multiply scenes, generate images, videos and chapters.
                </p>
              </div>
            </Link>
            <Link to='docs/en/OperateGPT' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolProduct />
                </div>
                <h3 className='about__header'>Knowledge Based QA</h3>
                <p className='about__description'>
                  support summary for multiply datasource, such as pdf, word, RDBMS, NoSQL, excel..etc.
                </p>
              </div>
            </Link>
            <Link to='docs/en/multi_models_manage' className='about__card'>
              <div className='about__section'>
                <div className='about__icon'>
                  <ToolSystem />
                </div>
                <h3 className='about__header'>Multi-Model Management</h3>
                <p className='about__description'>
                  Support for managing multiple models, model registration, model deletion, model monitoring, and inference load balancing.
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
