import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>长三角质量品牌联盟</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
                <li key="Enterprise">
                  <Link as={`/Home/`} href="/">
                    <a className="uk-link-reset">首页</a>
                  </Link>
                </li>
                <li key="Enterprise">
                  <Link as={`/enterprise`} href="/enterprise">
                    <a className="uk-link-reset">企业</a>
                  </Link>
                </li>
                <li key="Export">
                  <Link as={`/expert`} href="/expert">
                    <a className="uk-link-reset">专家学者</a>
                  </Link>
                </li>
                <li key="Organization">
                  <Link as={`/organization`} href="/organization">
                    <a className="uk-link-reset">研究机构</a>
                  </Link>
                </li>
                <li key="Article">
                  <Link as={`article`} href="/article">
                    <a className="uk-link-reset">质量与品牌专栏</a>
                  </Link>
                </li>
            {/* {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;