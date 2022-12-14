import React from 'react'
import { useParams } from 'react-router-dom';
import jeju from './image/jeju.jpeg';
import busan from './image/busan.jpeg';
import dokdo from './image/dokdo.jpeg';
import seoul from './image/seoul.jpeg';

export default function Tour_Article() {
    const name = useParams().tours;
    let body = null;
    if(name=="jeju") {
        body = <div><p>대한민국의 남서쪽에 있는 섬. 행정구역상 광역자치단체인 제주특별자치도의 관할. 한국의 섬 중에서 가장 크고 인구가 많은 섬으로 면적은 1833.2㎢이다. 이는 대한민국 본토에서 가장 큰 기초자치단체인 홍천군(1,820.14㎢)보다 약간 크며, 제주도 다음 2번째 큰 섬인 거제도(379.5㎢)의 5배 정도 된다. 인구는 약 70만 명, 세계 섬 크기 218위이다.

        동아시아권 전체로 범위를 넓혀도 꽤 큰 섬이다. 6,000개가 넘는 섬이 있는 일본조차도 본토로 간주되는 혼슈, 홋카이도, 시코쿠, 규슈 4개 섬을 제외한 나머지 모든 섬이 제주도보다 작다. 중국도 하이난 섬 한 곳만이 제주도보다 클 뿐이다. 하와이에서도 최대 섬인 하와이 섬 다음으로 큰 섬인 마우이 섬이 제주도보다 약간 큰 정도이다. 미국도 본토만 따지면 제주도보다 큰 섬은 롱아일랜드 뿐이다. 프랑스도 본토에는 제주도보다 큰 섬이 코르시카 섬밖에 없고, 독일에서 가장 큰 섬인 뤼겐 섬은 제주도보다 작다.
        
        화산 활동으로 형성된 화산섬이다. 이 때문에 중심에 한라산이 있고 섬 곳곳에는 200m~300m인 370개가량의 기생 화산(오름)이 있으며, 하논도 그중 하나이다.
        
        먼 옛날에는 탐라국이라는 국가가 있었다. 그래서 제주를 가리키는 이명으로 탐라도라고 불리기도 했다. 감귤이 많이 나서 감귤국이라는 별명도 있다.
        
        유럽에서는 쿠웰파르트(Quelpart)라는 이름으로 알려지기도 했다. 1642년 네덜란드의 쿠웰파르트 데 브라크(Quelpaert de Brack) 호가 동아시아 지역을 항해하다가 길을 잘못 들어 우연히 제주도를 발견하고 동인도 회사에 보고하게 되면서, 발견한 배의 이름을 차용한 것이다. 쿠웰파르트는 당시 네덜란드 동인도 회사 직원들의 속어로 소형 선박을 뜻하는 용어이기도 했다.</p>
        <img src={jeju} className='Article_img'></img></div>;
    }
    else if(name=="busan") {
        body = <div><p>한반도 동남부에 자리한 광역자치단체. 인구는 3,323,826명으로 모든 광역시 중 외국인을 제외해도 유일한 300만명대 도시이다. 모든 광역자치단체를 다 합치면 경기도-서울특별시 다음 3위. 광역자치단체들 중 인구 밀도도 서울에 이어 2위이다. 남쪽으로 바다를 사이로 일본 나가사키현 쓰시마 섬, 북쪽으로 경남 양산시 및 울산광역시 울주군, 서쪽으로 경남 창원시 진해구, 김해시 남쪽으로 경남 거제시와 접하고 있다.

        대한민국 제2의 도시이자 대한민국 최초의 직할시 · 광역시이고 국내 최대국제무역항이 있는 제1의 항구도시, 경상권 최대도시, 제1의 해양교통과 제2의 항공교통 김해국제공항 타이틀 등을 보유한 도시이기도 하다. 지역 내 문화 컨텐츠로는 대한민국 최대의 영화제인 부산국제영화제를 비롯해 G-STAR, 부산국제모터쇼, 부산불꽃축제, 부산항 불꽃축제, 부산 비엔날레, 부산 원아시아 페스티벌, 자갈치 축제, 부산 해맞이 축제 등이 유명하다.
        
        6.25 전쟁 때 부산은 대전, 대구에 이은 임시수도였으며 임시수도 시절부터 부산 경공업의 전성기였던 1970~1980년대, 민주항쟁, 1990년대 이후 주변 지방에 산업시설을 내주며 동남권을 형성해 온 파란만장한 역사를 간직하고 있다.
        
        대한민국의 동남쪽 해안에 있다. 동해와 남해가 모두 접해 있는 지리적 위치로 인해 해양 산업, 해양 교통 등이 오래전부터 발달하였다.
        </p>
        <img src={busan} className='Article_img'></img>
        </div>
    }
    else if(name=="seoul") {
        body = <div><p>서울특별시는 대한민국의 수도, 최고(最古) 도시, 최대 도시다.

        지방자치법의 특별법으로 법률상 대한민국 제1의 도시로 규정되어 있다. 현재 대한민국 유일 특별시이며, 수장인 서울특별시장은 대한민국의 광역자치단체장 중 유일하게 장관급 대우를 받으며 국무회의 참여권 및 발언권이 있다. 서울은 한국 제2의 도시인 부산보다도 인구가 약 3배 더 많은 명실상부한 한반도의 종주도시이다.
        
        역사적으로도 백제, 조선, 대한제국의 고도이자 현 대한민국의 수도로서 중요성이 높다. 기원전 18년 백제가 현 송파·강동 지역에 도읍을 정한 후 492년간 한성백제 시대가 이어졌다. 이후 475년 고구려가 한성을 함락하였는데, 북쪽에 기반을 둔 국가인 고구려는 기존 백제의 한성에서 북쪽으로 한강을 건너 현 광진·성동·구리 일대를 거점으로 삼아 고구려의 북한산군 남평양으로 지정했고, 이후 서울은 강북 지역을 중심으로 발전하였다. 이후 553년 신라가 이 지역을 차지하여 신라의 한산주 한양군이 되었다. 이후 고려시대에는 약 250년간 개경 이남의 남경이었다. 조선시대에는 510년 동안 조선 및 대한제국의 수도 한성부였고, 이어 70여년간 대한민국의 수도인 서울로서 지위를 차지하는 도시로 한국사에서 도합 1070여년간 수도로서 기능을 하였고 부수도 기간까지 합치면 1300년이 넘는 유구한 역사의 고도이다.</p>
        <img src={seoul} className='Article_img'></img>
        </div>
    }
    else if(name=="dokdo") {
        body = <div><p>동해에 있으며 대한민국의 최동단에 있는 섬. 대한민국의 영토이나, 일본이 영토(영유권) 주장을 하고 있는 영토 분쟁 지역이다. 국제법상으로는 한국의 실효지배상태이다. 자세한 사항은 독도/논란 참조. 국제해양법상 암초(rocks)로 구분된다.https://dokdo.mofa.go.kr/kor/
        </p>
        <img src={dokdo} className='Article_img'></img>
        </div>
    }
  return (
    <div>
        <h1>{name}</h1>
        {body}
    </div>
  )
}
