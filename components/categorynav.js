import Link from "next/link";

const CategoryNav = ({ slug,type, title, categories }) => (
<div className="">
  {/* {title}: */}
<ul className="uk-subnav uk-subnav-pill">
      <li key="all" className={!slug?"uk-active":""}>
        <Link as={`/${type}/`} href={`/${type}/`} >
          <a className="uk-box-shadow-small" >全部</a>
        </Link>
      </li>
  {categories.map((category) => {
    return (
      <li key={category.id} className={slug&&slug.localeCompare(category.slug)==0?"uk-active":""}>
        <Link as={`/${type}/category/${category.slug}`} href={`/${type}/category/[id]`} >
          <a className="uk-box-shadow-small">{category.name}</a>
        </Link>
      </li>
    );
  })}
</ul>
</div>
);


export default CategoryNav;