import React from 'react'
import { useParams } from 'react-router-dom'
import kimchi from './image/kimchi.jpg'
import bulgogi from './image/bulgogi.jpg'
import bibimbap from './image/bibimbap.jpg'
import pork from './image/pork.jpg'
import './css/Food_Article.css'

export default function Food_Article() {
    const name = useParams().foods;
    let body = null;
    if(name=="kimchi") {
        body = <div><p>김치는 한국의 전통 발효식품이자 일종의 조리 양식이다. 소금물에 절이고 발효시켜 보관성을 높인 채소를 갖은 양념으로 맛을 내어 먹는 음식. 다른 수식어 없이 '김치'라고만 말하면 김장배추를 고추가루로 빨갛게 만든 남부지방식 배추김치를 주로 말하는 것이고 이것이 세계적으로 가장 유명하다. 이런 맵고 짠 김치 외에도 다양한 종류의 김치가 존재하는데, 무를 절여서 만든 총각김치나 깍두기, 오이로 만든 오이소박이, 과거의 서울이나 현 북부지방에서 김치 하면 주로 떠올렸던 백김치 등의 김치도 존재한다. 한번 절인 채소를 다시 양념한다는 점이 특징이다. 사용되는 재료에 있어서도 일부 몇몇 채소를 제외하고는 대부분이 가능하다. 아울러 저온 상태에서 밀봉 보관이 가능하다면 몇 년간 두고 먹을 수 있는 장기 보관 음식이기도 하다.또한, 김치의 종류는 매우 다양하여 가장 많이 알려진 배추김치부터 시작해서 다양한 변형이 존재한다. 지역마다 다른 지역에서는 볼 수 없는 요리법과 재료를 사용한 김치가 존재해 향토음식으로서의 정체성 또한 갖고 있다. 한국음식 특유의 '매콤함과 감칠맛'을 느낄 수 있는 내외국인 공인 가장 한국적인 한국 요리라 할 수 있다. 김치만으로 식사를 해온 역사도 길고, 오늘날 어지간한 1인 가구조차도 김치 정도는 갖추고 있다는 점에서 한국인의 생활과 아주 밀접하게 닿아있는 요리이다.</p>
        <img src={kimchi} className='Article_img'></img></div>;
    }
    else if(name=="bulgogi") {
        body = <div><p>불고기는 여러 동물의 고기를 얇게 썰어 양념으로 재운 뒤 불에 구워 먹는 한국 요리의 하나이다. 비빔밥, 냉면, 김치, 갈비와 함께 한식을 대표하는 메뉴로서, 경우에 따라 호불호가 갈릴 수 있는 한식 특유의 강한 향미보다 구수하고 짭짤한 맛과 불맛이 무난히 어우러지기 때문에 외국인들이 가장 선호하는 한국 음식 중 하나이기도 하다.</p>
        <img src={bulgogi} className='Article_img'></img>
        </div>
    }
    else if(name=="bibimbap") {
        body = <div><p>비빔밥은 밥에 각종 나물을 넣고, 장을 넣어서 비벼 먹는 전통 한국 요리로, 오늘날에는 육류를 같이 넣는 것이 선호되기도 한다. 한자어로는 골동반(骨董飯)이라고 한다.</p>
        <img src={bibimbap} className='Article_img'></img>
        </div>
    }
    else if(name=="pork") {
        body = <div><p>돼지의 갈비 부근에 붙은 돼지 뱃살 부위를 지칭한다. 비계가 세 겹으로 겹쳐 보이기 때문에 삼겹살로 불린다. 생김새를 보면 비계-살코기-비계-살코기 순이다. 배바깥빗근, 배속빗근, 배가로근 이렇게 근육 세 층으로 구성된 배벽을 먹는 것이다. 한국에서는 외식이나 회식 자리에서 선호 메뉴 1순위로 꼽힐 정도로 가장 선호되는 돼지고기 부위이다. 국내 생산량만으로는 수요를 맞추기 빠듯해서 수입도 많이 하는데 2020년 기준 돼지고기 수입량에서 삽겹살(12만 8천 톤)의 비중은 2위 목심(5만 4천 톤)의 2배 이상으로 압도적이다. 보통 삼겹살 구이로 만들어 깻잎이나 상추에 쌈으로 싸서 먹는다.
        </p>
        <img src={pork} className='Article_img'></img>
        </div>
    }
  return (
    <div>
        <h1>{name}</h1>
        {body}
    </div>
  )
}
