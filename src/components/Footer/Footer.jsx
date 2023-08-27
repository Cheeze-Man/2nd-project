import React from 'react';
import './Footer.scss';

const FOOTER_ICONS = [
  {
    title: '인스타그램',
    href: '//www.instagram.com/jumpit.official',
    src: '//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-instagram.svg',
  },
  {
    title: '카카오',
    href: '//pf.kakao.com/_BPpJs',
    src: '//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-kakao.svg',
  },
  {
    title: '유튜브',
    href: '//www.youtube.com/channel/UCo8N6hfw4a5PDaiPaeBr4UQ/featured',
    src: '//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-youtube.svg',
  },
  {
    title: '페이스북',
    href: '//www.facebook.com/jumpit.ITjump',
    src: '//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-facebook.svg',
  },
  {
    title: '플레이스토어',
    href: '//play.google.com/store/apps/details?id=kr.co.saramin.jumpit',
    src: '//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-google.svg',
  },
  {
    title: '앱스토어',
    href: '//apps.apple.com/app/id1552125375',
    src: '//cdn.jumpit.co.kr/jumpit/personal/v-footer-sns-apple.svg',
  },
];

const FOOTER_LINKS = [
  [
    {
      title: '서비스 소개',
      href: '/hello',
    },
    {
      title: '기업 서비스',
      href: '//biz.jumpit.co.kr',
    },
    {
      title: '점핏Team',
      href: '//team.jumpit.co.kr',
    },
  ],
  [
    {
      title: '이용약관',
      href: '/policy/terms',
    },
    {
      title: '개인정보처리방침',
      href: '/policy/private',
    },
    {
      title: '자주 묻는 FAQ',
      href: '//team.jumpit.co.kr/e8154e47-4105-42fa-b374-39181297ed35',
    },
  ],
];

export default function Footer() {
  return (
    <div className="footerBackGround">
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
            사업자등록 : 113-86-00917 / 직업정보제공사업 : 서울 관악 제 2005-6호
            / 통신판매업 : 제 2339호
          </dd>
          <dd>Copyright (c) (주)사람인. All rights reserved.</dd>
          <dd className="snsIcons">
            {FOOTER_ICONS.map(({ title, href, src }, i) => (
              <a
                target="blank"
                rel="noreferrer noopener"
                title={title}
                href={href}
                key={i}
              >
                <img alt={title} src={src} />
              </a>
            ))}
          </dd>
        </dl>

        <div className="footerLinks">
          <ul className="links">
            {FOOTER_LINKS[0].map(({ title, href }, i) => (
              <li key={i}>
                <a
                  target="blank"
                  rel="noreferrer noopener"
                  title={title}
                  href={href}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="links">
            {FOOTER_LINKS[1].map(({ title, href }, i) => (
              <li key={i}>
                <a
                  target="blank"
                  rel="noreferrer noopener"
                  title={title}
                  href={href}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
