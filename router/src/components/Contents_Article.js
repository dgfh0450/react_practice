import React from 'react'
import { useParams } from 'react-router-dom';
import squidgame from './image/squidgame.jpeg';
import lostark from './image/lostark.jpeg';
import parasite from './image/parasite.jpeg';
import kpop from './image/kpop.jpeg';

export default function Contents_Article() {
    const name = useParams().contents;
    let body = null;
    if(name=="squidgame") {
        body = <div><p>황동혁 감독이 제작한 넷플릭스 오리지널 한국 드라마. 2021년 9월 17일에 공개되었다.
        456명의 사람들이 456억의 상금이 걸린 미스터리한 데스 게임에 초대되면서 벌어지는 이야기를 그린 서바이벌, 데스 게임 장르의 드라마이며 제목은 골목 놀이인 오징어에서 따 왔다.
        2022년 6월 13일 시즌 2 제작이 결정됐다.
        영화 기생충과 더불어 세계에서 엄청난 수익을 올리며 유명해진 한국 드라마다. 기생충이 사회에서 상류층과 하류층 사이의 허물 수 없는 벽을 표현했다면, 오징어 게임은 상대적으로 가난한 사람들이 돈과 출세를 위해 물불을 안 가리고 서로 경쟁하는 적자생존의 현장을 적나라하게 표현한 드라마다.</p>
        <img src={squidgame} className='Article_img'></img></div>;
    }
    else if(name=="lostark") {
        body = <div><p>
        스마일게이트 RPG가 개발한 쿼터뷰 액션 MMORPG다. 2014년 11월 12일 최초 공개했으며 2018년 11월 7일부터 오픈 베타 테스트를 진행하였으며 2019년 12월 4일 정식 오픈했다. 이후 러시아, 일본, 글로벌 서버 순으로 런칭하였다.
        
        플랫폼은 PC 하나뿐이지만 모바일과 콘솔 등 각종 플랫폼으로도 개발을 진행하고 있다는 기사가 존재한다.</p>
        <img src={lostark} className='Article_img'></img>
        </div>
    }
    else if(name=="parasite") {
        body = <div><p>2019년에 개봉한 봉준호 감독의 7번째 장편 영화. 상류층과 하류층, 두 가족의 만남을 다룬 대한민국의 블랙 코미디 가족 드라마 영화이다.</p>
        <img src={parasite} className='Article_img'></img>
        </div>
    }
    else if(name=="kpop") {
        body = <div><p>K-pop은 대한민국의 대중가요, 즉 korean popular music에서 팝 음악을 뜻하는 ‘Popular music’과 ‘Korea’의 합성어이다. 팝 음악은 대중문화의 한 분야로, 본래 영미권에서 단어의 의미가 시작되었고 한국에서 가요라는 의미로 여겨졌다. K-pop이라는 단어가 만들어진 이후부터 각 나라의 특성을 반영하기 위해 국가를 구분하는 표시가 앞에 붙는 형식이 생겼다. 1999년 10월 9일자 조현진 빌보드 한국특파원의 'S. Korea To Allow Some Japanese Live Acts' 기사에 따르면 처음 이 용어가 등장한것은 1990년대라고 하며, 한국의 프로축구 리그인 K리그의 당시 명칭이던 'K-리그'에서 영감을 받은 것이라고 한다.
        팝 음악은 대체로 국가별 전통음악이나 민속음악은 포함하지 않는다. 20세기 중반 이후 크게 발전한 근현대음악에 주로 기원했기 때문에 모든 음악이 팝 음악에 속하는 것 역시 아니다. 과거에는 대한민국 음악 전반을 아우르는 느낌이었으나 2010년 이후에는 대한민국에서 만들어진 음악중에 세계적으로 유명한 댄스 음악, 틴팝 음악, 혹은 아이돌 음악, 발라드 음악, OST 등을 일컫는 의미로 통용되고 있다.</p>
        <img src={kpop} className='Article_img'></img>
        </div>
    }
  return (
    <div>
        <h1>{name}</h1>
        {body}
    </div>
  )
}
