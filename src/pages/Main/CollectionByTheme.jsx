import React from 'react';
import './CollectionByTheme.scss';

export default function CollectionByTheme() {
  return (
    <div className="collectionByTheme">
      <div className="themeTopBar">
        <h1 className="themeTitle">테마별 모음.zip</h1>
        {/* <div className="themeSlideButtons"></div> */}
      </div>
      <div className="themeBanners">
        <div className="themeBanner firstThemeBanner">
          <h2 className="themeBannerTitle">
            K-유니콘으로 <br />
            무럭무럭 크는 중
          </h2>
        </div>
        <div className="themeBanner secondThemeBanner">
          <h2 className="themeBannerTitle">
            이제는 필환경 시대!
            <br />
            지구를 지키는 착한 기업
          </h2>
        </div>
      </div>
    </div>
  );
}
