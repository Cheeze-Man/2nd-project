import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footerLogo" src="images/logo-grey.png" alt="JumpIt" />
      <dl className="footerInformations">
        <dd>
          점핏 고객센터 : 02-2025-2733 (평일 09:00 - 18:00, 점심시간 12:00 -
          13:00, 주말·공휴일 휴무)
          <br />
          이메일 : help@jumpit.co.kr / Fax : 02-6937-0036
        </dd>
        <dd>
          (주)사람인, 우 : 08378, 서울특별시 구로구 디지털로34길 43,
          14층(구로동, 코오롱싸이언스밸리 1차), 대표 : 김용환
          <br />
          사업자등록 : 113-86-00917 / 직업정보제공사업 : 서울 관악 제 2005-6호 /
          통신판매업 : 제 2339호
        </dd>
        <dd>Copyright (c) (주)사람인. All rights reserved.</dd>
        <dd className="snsIcons">
          <a
            target="blank"
            title="인스타그램 새창열림"
            href="//www.instagram.com/jumpit.official"
          >
            <img
              alt="인스타그램"
              src="//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-instagram.svg"
            />
          </a>
          <a
            target="blank"
            title="카카오 새창열림"
            href="//pf.kakao.com/_BPpJs"
          >
            <img
              alt="카카오"
              src="//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-kakao.svg"
            />
          </a>
          <a
            target="blank"
            title="유튜브 새창열림"
            href="//www.youtube.com/channel/UCo8N6hfw4a5PDaiPaeBr4UQ/featured"
          >
            <img
              alt="유튜브"
              src="//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-youtube.svg"
            />
          </a>
          <a
            target="blank"
            title="페이스북 새창열림"
            href="//www.facebook.com/jumpit.ITjump"
          >
            <img
              alt="페이스북"
              src="//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-facebook.svg"
            />
          </a>
          <a
            target="blank"
            title="플레이스토어 새창열림"
            href="//play.google.com/store/apps/details?id=kr.co.saramin.jumpit"
          >
            <img
              alt="플레이스토어"
              src="//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-google.svg"
            />
          </a>
          <a
            target="blank"
            title="앱스토어 새창열림"
            href="//apps.apple.com/app/id1552125375"
          >
            <img
              alt="앱스토어"
              src="//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-apple.svg"
            />
          </a>
        </dd>
      </dl>

      <div className="footerLinks">
        <ul className="links">
          <li>
            <a target="blank" title="새창열림" href="/hello">
              서비스 소개
            </a>
          </li>
          <li>
            <a
              target="blank"
              title="기업서비스 새창열림"
              href="//biz.jumpit.co.kr"
            >
              기업 서비스
            </a>
          </li>
          <li>
            <a
              target="blank"
              title="점핏 블로그 새창열림"
              href="//team.jumpit.co.kr"
            >
              점핏Team
            </a>
          </li>
        </ul>
        {/* right */}
        <ul className="links">
          <li>
            <a target="blank" title="새창열림" href="/policy/terms">
              이용약관
            </a>
          </li>
          <li>
            <a target="blank" title="새창열림" href="/policy/private">
              <b>개인정보처리방침</b>
            </a>
          </li>
          <li>
            <a
              target="blank"
              title="자주묻는질문 FAQ 새창열림"
              href="//team.jumpit.co.kr/e8154e47-4105-42fa-b374-39181297ed35"
            >
              자주묻는질문 FAQ
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
