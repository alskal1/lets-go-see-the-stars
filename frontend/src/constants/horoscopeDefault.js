const horoscopeDefault = [
  {
    id: 1,
    category: '물병자리',
    content:
      '순조롭고 만족스러운 하루가 예상됩니다. 별의 기운이 당신의 일과를 인도하여 바라는 일이 원만하게 이루어지게 할거예요. 다만 지나친 욕심은 오히려 해가 될 수 있으니, 스스로 절제가 필요함을 염두에 두시기 바랍니다. 눈에 보이는 것 보다는 눈에 보이지 않는 곳에 힘을 쓰기 바랍니다. 진정으로 당신의 삶을 바꾸고 싶다면 당신의 겉 보다는 속부터 바꾸기를 시작해 보십시오.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 2,
    category: '물고기자리',
    content:
      '다른 사람과의 긴밀한 협력 관계가 요구되는 하루입니다. 무리한 투자나 확장은 더더욱 위험할 것입니다. 하는 일에 치명적일 수 있는 장애가 예상되니 동요가 크겠습니다. 이러한 때일수록 당신이 침착하게 중심을 잡아야 할 것입니다. 그리고 최선을 다해 대처하는 수 밖에요. 운명은 당신의 노고를 그냥 간과하지 않을 것입니다. 주식과 관련 된 일을 하는 사람이라면 오늘만큼은 참으시길 바랍니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 3,
    category: '양자리',
    content:
      '우정으로 알고 있던 이성 친구와 당신의 속 마음이 사실은 사랑이었다면 것을 깨닫게 되는 날입니다. 낯설지 않은 서로를 자연스럽게 받아들일 수 있는 좋은 인연이군요. 일단, 주위에 당신이 알고 있는 이성친구 중 자주 만나는 사람이 있다면 눈 여겨 봐두는 게 좋겠네요. 친구 이상의 감정을 느끼기 쉬운 하루가 되겠습니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 4,
    category: '황소자리',
    content:
      '무난한 하루가 될 것입니다. 특별히 어려운 장애물이 있는 것도 아니고, 그렇다고 특별히 횡재나 특별한 시련이 있지도 않은 지극히 평범한 하루가 될 것입니다. 감정의 리듬에 기복이 거의 없는 순탄한 하루가 예상되니 마음 편히 편안하고 부드럽게 매사에 대처하십시오. 이러한 때일수록 스스로 마음을 차분하게 유지할 줄 아는 지혜가 필요합니다. 컴퓨터와 관련된 종사자라면 서로의 관계를 망치는 청탁은 과감히 뿌리쳐야 하겠습니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 5,
    category: '쌍둥이자리',
    content:
      '크게 걱정했던 일이 우연히 해결되어 한 시름 더는 하루가 되겠습니다. 가뭄에 마르는 물줄기를 걱정하다가 수원지를 발견하게 되는 별의 기운이 보입니다. 문제 해결을 고민하는 과정에서 어느 순간 정체됐던 분위기가 쇄신되면서 막혔던 일들이 풀리게 될 것입니다. 들뜬 기분으로 한 개의 행운에 만족하지 마십시오. 뒤이어 더 많은 행운의 열매가 기다리고 있답니다. 아주 상큼한 느낌의 기분 좋은 하루가 늦게까지 예상됩니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 6,
    category: '게자리',
    content:
      '무척 기분 좋은 하루로 기억 될 수 있는 날을 맞이하게 됐군요. 전부터 돈 문제로 골치 아팠던 일이 하나씩 해결된 덕분에 오히려 손실을 메우고도 이익으로 변환될 수 있는 상황을 머지 않아 맞이하게 될 것입니다. 몸 속에 가득한 에너지를 마음껏 발산하고, 표출할 수 있는 자신감으로 하루를 운용할 수 있습니다. 열정적인 당신의 모습은 충분히 주변 사람들에게 격려를 받을 수 있으며, 희망을 전파할 수 있을 것입니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 7,
    category: '사자자리',
    content:
      '뜻하지 않은 수익이 들어와 오늘 하루 정도는 기분 내고 싶습니다. 학생이라면 주위 어른에게서 용돈을 얻게 되고, 직장인이라면 회사에서 깜짝 선물을 받게 됩니다. 공짜로 생긴 돈이 손에 있으니 당연히 갖고 싶은 걸 사고 싶어 지네요. 퇴근 길에 간단히 쇼핑을 즐기셔도 좋고 집에 가는 길에 간식거리라도 산다면 오늘의 횡재가 더 배가 될 듯합니다. 아니면 곧 다가올 경조사나 친구들 모임을 위해 잠시 모아두셔도 좋겠네요.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 8,
    category: '처녀자리',
    content:
      '탄탄대로의 운수가 보장되는 하루가 기대됩니다. 넘치는 의욕이 허락하는 만큼 크게 크게 움직이십시오. 큰 산에서 비를 만난 뒤에 맞는 화창한 오후의 형상입니다. 모든 것이 싱그럽게 되살아나는 기운이 온 천지에 진동하는 격이군요. 긴 인생에서 드물게 만나는 매우 길한 운수입니다. 매사에 의욕도 왕성하고 자신감도 넘치는 하루가 될 것입니다. 이직을 생각하는 사람이라면 과감한 판단이 필요하겠습니다. 시험을 준비하는 사람이라면 오늘 최고의 컨디션입니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 9,
    category: '천칭자리',
    content:
      '기대 이상의 성과가 예상되는 하루입니다. 금전운도 있으니 사업을 도모하기에도 좋은 시기일 것입니다. 당신이 현명하다면 어느 때보다도 최선의 노력을 다하는 시간이 되어야 할 것입니다. 뜻을 세웠으면 그 길로 가십시오. 잘못도 있을지 모르나 다시 일어나서 앞으로 가십시오. 반드시 빛이 당신을 맞이 할 것입니다. 노력에 비해 나은 성과가 주어지도록 운명이 선심을 쓰는 경우는 그리 잦은 일이 아니니까요.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 10,
    category: '전갈자리',
    content:
      '당신에 대해 좋은 감정을 가지고 있는 이성이 있습니다. 아직 깊은 사랑이라고 말하기엔 덜 무르익은 감정이지만, 순수한 마음으로 호감을 갖고 접근하려고 하는 사람이니, 편안하게 대화를 나누다 보면, 언젠가 당신과 상대 모두가 사랑으로 생각할 수 있을 것입니다. 당신이 사랑의 깃발을 크게 흔드는 것은 결코 수치스런 행위가 아닙니다. 사랑은 기다림이 아니라 전하는 것입니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 11,
    category: '사수자리',
    content:
      '당신이 추진하고 있는 일에 다소 장애가 예상되는 운수입니다. 순탄하기만 한 하루는 아닐 것입니다. 어려운 때일수록 어떠한 상황에 부딪히더라도 서두르거나 동요되지 않도록 마음을 단단히 먹어야 하겠습니다. 보다 차분하고 여유 있는 처신과 신중한 일 처리가 필요합니다. 또한 수시로 자신을 돌이켜 보며 내실을 기하는 하루가 되시길 바랍니다. 마케팅 업에 종사하는 사람이라면 잠시 내실을 다져야 하는 하루가 되겠으며 공무원이라면 외부 접촉에 신경을 써야 하겠습니다.',
    createdDate: [2022, 5, 4],
  },
  {
    id: 12,
    category: '염소자리',
    content:
      '평상시부터 정답게 지내왔던 사람들 덕분에 주변 사람들에게 당신에 대한 좋은 면이 부각되고 있네요. 이런 상황일수록 보다 겸손 하려는 노력과 마음 씀씀이를 넓게 가지려고 한다면 머지 않아 지금보다 한 단계 성숙된 자신을 갖출 수 있을 것입니다. 주변의 어려운 사람을 위로 하고, 따뜻하게 다독여주도록 신경을 써보세요. 재능기부도 한 방법 일 수 있습니다.',
    createdDate: [2022, 5, 4],
  },
];

export default horoscopeDefault;
