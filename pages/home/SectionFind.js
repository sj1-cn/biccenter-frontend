
 import Link from 'next/link';

const SectionFind = ({ }) => (
    <div >
        <div className="qz_ser">
            <ul className="cl">
                <li className="on1">
                  <Link as={`/enterprise`} href="/enterprise">
                    <a className="uk-link-reset">
                        <div>
                            <h3>企业</h3>
                            <span>会员企业</span>
                        </div>
                        <img src="../images/sign01.png" name="picture"/>
                    </a>
                    </Link>
                </li>
                <li className="on2">
                  <Link as={`/expert`} href="/expert">
                    <a className="uk-link-reset">
                        <div>
                            <h3>专家</h3>
                            <span>专家学者</span>
                        </div>
                        <img src="../images/sign02.png" name="picture"/>
                    </a>
                    </Link>
                </li>
                <li className="on3">
                  <Link as={`/organization`} href="/organization">
                    <a className="uk-link-reset">
                        <div>
                            <h3>机构</h3>
                            <span>各研究机构</span>
                        </div>
                        <img src="../images/sign03.png" name="picture"/>
                    </a>
                    </Link>
                </li>
                <li className="on4">
                  <Link as={`/activity`} href="/activity">
                    <a className="uk-link-reset">
                        <div>
                            <h3>活动表</h3>
                            <span>近期活动</span>
                        </div>
                        <img src="../images/sign04.png" name="picture"/>
                    </a>
                    </Link>
                </li>
                <li className="on5">
                  <Link as={`/article`} href="/article">
                    <a className="uk-link-reset">
                        <div>
                            <h3>专栏</h3>
                            <span>品牌质量专栏</span>
                        </div>
                        <img src="../images/sign05.png" name="picture"/>
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  );
  
  export default SectionFind;