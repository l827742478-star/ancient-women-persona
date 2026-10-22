const STORAGE_KEY = "ancient-women-persona-last-v1";
const PROGRESS_KEY = "ancient-women-persona-progress-v1";

const figures = {
  wu: { name: "武则天", type: "掌局型", english: "THE STEWARD", color: "#b64132", tagline: "你习惯把局面看清，再决定自己要站到哪里。", body: "你对复杂关系和多重目标有天然的耐受力。你不满足于只把眼前的事做完，更关心规则是谁写的、资源怎样流动、下一步怎样才能留在自己手里。你身上的“掌局”，不是控制一切，而是愿意承担选择的后果。", advice: "别把所有变量都握在手里才肯交棒。真正稳的局，也容得下别人发挥。", share: "我不是只想赢这一局，我想看懂这局为什么这样下。" },
  mulan: { name: "花木兰", type: "破局型", english: "THE BREAKER", color: "#cf713c", tagline: "当旧路走不通，你会先把新的路走出来。", body: "你面对压力时常常比自己想象中更有行动力。你不一定喜欢被推到台前，但当有人需要站出来，你会先把事情接住。你的勇气不是没有害怕，而是知道害怕也不能替你做决定。", advice: "不必每次都靠硬扛来证明可靠。让别人分担，不会削弱你的勇敢。", share: "路不是等来的，是先迈出那一步之后才显出来。" },
  liqing: { name: "李清照", type: "观心型", english: "THE SENSITIVE", color: "#7564a7", tagline: "你能听见别人忽略的细节，也很诚实地听见自己。", body: "你对情绪、语言和氛围的变化很敏锐。你不是只在意“发生了什么”，还会在意它给人留下了什么。你把经验沉淀成判断和表达，细腻不是负担，而是你理解世界的工具。", advice: "别把敏感都用来反复检讨自己。你看见细节，也有权利保留自己的解释。", share: "我记得的不只是事情，还有它落在心里的声音。" },
  banzhao: { name: "班昭", type: "传承型", english: "THE KEEPER", color: "#4b8a76", tagline: "你擅长把走过的路整理成别人也能使用的方法。", body: "你重视知识的来处，也愿意把复杂内容讲到别人听得懂。你不急着抢最后的掌声，更在意一件事能不能留下秩序、经验和下一次更好的起点。你的影响力常常是慢慢长出来的。", advice: "传递经验时，也别忘了让自己的名字和需要被看见的贡献留下来。", share: "好的经验不是藏起来的答案，而是能让后来者少走弯路。" },
  shangguan: { name: "上官婉儿", type: "织局型", english: "THE WEAVER", color: "#a77a38", tagline: "你知道一句话放在哪里，能改变一整张桌子的气氛。", body: "你擅长在信息、人情和表达之间搭桥。你能读懂场合，也能为不同的人找到可被接受的说法。你不只是会表达，更懂得什么时候说、对谁说，以及怎样让事情继续往前走。", advice: "圆融是能力，但不必把每一次锋芒都磨成别人舒服的形状。", share: "语言不是装饰，它会替你打开一扇门。" },
  zhaojun: { name: "王昭君", type: "和合型", english: "THE BRIDGE", color: "#508285", tagline: "你能在陌生之间找到一条不伤人的路。", body: "你面对变化和不同文化、不同立场时，第一反应不是贴标签，而是寻找理解的入口。你有适应力，但并不等于没有原则；你愿意成为桥，也会留意桥两端的人是否都能安全抵达。", advice: "别只负责让所有人相处得好，也要确认自己是否真的愿意走这条路。", share: "真正的和合，不是消失自己，而是让不同仍然可以共处。" },
  cai: { name: "蔡文姬", type: "复原型", english: "THE RESTORER", color: "#9b5c70", tagline: "你经历过风浪，却仍然有把生活重新编回来的能力。", body: "你对失去、迁徙和重新开始有比别人更深的理解。你会保存记忆，也会寻找让自己继续生活的方式。你不是把伤痕藏起来的人，而是能把经验转成作品、照料和重新连接的力量。", advice: "复原不等于必须马上坚强。允许自己被照顾，也是一种恢复。", share: "我带着记忆往前走，而不是被记忆留在原地。" },
  xie: { name: "谢道韫", type: "清醒型", english: "THE CLEAR-EYED", color: "#657580", tagline: "你有自己的尺度，不会轻易把判断交给人群。", body: "你喜欢直接面对问题，也不太愿意为了合群而假装认同。你有幽默、机锋和清晰的边界感，能在热闹里保持自己的观察。你不必成为最喧闹的人，也可以成为最难被忽略的那个人。", advice: "清醒不是永远站在局外。遇到值得的人和事，也可以让自己参与得更深。", share: "我可以温柔，但不会把判断力交出去。" }
};

const questions = [
  { tag: "入局方式", title: "走进一个完全陌生的场合，你会先做什么？", hint: "选最接近你真实第一反应的一项。", options: [
    ["先观察谁在做决定，规则从哪里开始。", ["wu", "shangguan"], [4, 1, 0, 1, 2, 0]],
    ["先找一个能做的小动作，让自己动起来。", ["mulan", "cai"], [1, 4, 0, 0, 2, 1]],
    ["先感受氛围和每个人说话的分量。", ["liqing", "zhaojun"], [1, 0, 1, 4, 2, 1]],
    ["先问清来由、流程和不能越过的线。", ["banzhao", "xie"], [3, 1, 4, 1, 3, 0]]
  ]},
  { tag: "临时变故", title: "原本安排好的计划突然被打乱，你会？", hint: "看你会先掌舵、补位，还是重新理解局面。", options: [
    ["迅速判断什么必须保住，重排顺序。", ["wu", "banzhao"], [4, 3, 2, 0, 3, 0]],
    ["先把眼前最急的缺口顶上去。", ["mulan", "cai"], [1, 4, 0, 1, 4, 0]],
    ["先确认变化会让谁不安，再寻找共同方案。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 2, 2]],
    ["先退一步看，确认这是不是更好的方向。", ["xie", "liqing"], [4, 0, 3, 1, 2, 2]]
  ]},
  { tag: "被误解", title: "别人误会了你的意思，你第一反应是？", hint: "不选最正确的，选你会做的。", options: [
    ["换一个更具体的说法，把逻辑讲完整。", ["banzhao", "shangguan"], [2, 1, 1, 3, 1, 4]],
    ["直接指出关键误读，把话题拉回重点。", ["xie", "mulan"], [2, 4, 2, 0, 1, 4]],
    ["先问对方为什么会这样理解。", ["liqing", "zhaojun"], [2, 1, 0, 4, 2, 3]],
    ["如果目标没有变，就继续用结果证明。", ["wu", "cai"], [4, 3, 1, 0, 3, 1]]
  ]},
  { tag: "边界时刻", title: "有人把一件你不想承担的事推给你，你会？", hint: "边界通常在“顺手帮一下”里出现。", options: [
    ["问清楚这件事的责任和优先级。", ["wu", "xie"], [4, 1, 4, 0, 2, 1]],
    ["先接住，之后再想办法调整。", ["mulan", "cai"], [1, 4, 1, 1, 4, 0]],
    ["先判断对方是不是真的走投无路。", ["zhaojun", "liqing"], [1, 1, 1, 4, 2, 2]],
    ["说明我能帮到哪里，并把方法留下来。", ["banzhao", "shangguan"], [3, 2, 3, 2, 3, 1]]
  ]},
  { tag: "表达锋芒", title: "你有一个不成熟但重要的想法，会怎么说？", hint: "这道题看你如何让想法获得生存空间。", options: [
    ["先讲最小版本，邀请别人一起补全。", ["shangguan", "zhaojun"], [1, 2, 0, 4, 1, 4]],
    ["直接讲核心判断，看现场反应再修正。", ["xie", "mulan"], [1, 4, 1, 0, 1, 4]],
    ["先写下来，等它在心里长得更清楚。", ["liqing", "cai"], [3, 1, 1, 1, 3, 4]],
    ["准备好证据和路径，再正式提出。", ["wu", "banzhao"], [4, 2, 3, 1, 3, 2]]
  ]},
  { tag: "关系拉扯", title: "两个人都来找你评理，你会先做什么？", hint: "不需要当裁判，先选你的介入角度。", options: [
    ["把事实、目标和各自底线拆开。", ["wu", "xie"], [4, 1, 4, 1, 2, 1]],
    ["让双方把话说完，再找能继续行动的共同点。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 2, 2]],
    ["先保护最受伤的一方，再慢慢处理问题。", ["cai", "liqing"], [1, 2, 1, 4, 4, 1]],
    ["提出一个小范围的试行方案，先停止空转。", ["mulan", "banzhao"], [1, 4, 1, 2, 2, 3]]
  ]},
  { tag: "失去之后", title: "一段重要关系结束了，你更可能？", hint: "这不是测坚强，而是看你如何和经验相处。", options: [
    ["整理发生过的事，找出自己真正的选择。", ["liqing", "xie"], [4, 0, 1, 1, 3, 3]],
    ["先离开现场，去做一件能让自己恢复力量的事。", ["mulan", "cai"], [1, 4, 0, 1, 4, 1]],
    ["把值得保留的记忆留下，再继续往前。", ["cai", "banzhao"], [2, 1, 1, 1, 4, 3]],
    ["想办法让双方体面地走出这段关系。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 2, 2]]
  ]},
  { tag: "选择权", title: "如果所有人都等你做决定，你会？", hint: "看看你和责任、风险、他人期待的距离。", options: [
    ["先把最坏结果和可用资源列出来。", ["wu", "banzhao"], [4, 2, 3, 0, 3, 1]],
    ["做一个能把事情推起来的决定。", ["mulan", "xie"], [1, 4, 1, 0, 2, 3]],
    ["问一圈关键的人，确保没人被忽略。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 2, 2]],
    ["先听自己的判断，再说明为什么。", ["liqing", "cai"], [3, 2, 2, 1, 3, 4]]
  ]},
  { tag: "学习方式", title: "遇到陌生知识，你最常用的路径是？", hint: "不同的学习方式，会长出不同的力量。", options: [
    ["把资料分类，建立一套能复用的框架。", ["banzhao", "wu"], [4, 1, 2, 0, 3, 2]],
    ["先做一个小实验，边试边修正。", ["mulan", "xie"], [1, 4, 0, 0, 2, 3]],
    ["把它和自己的经历、感受连接起来。", ["liqing", "cai"], [2, 1, 1, 1, 4, 4]],
    ["找人交流，看看它在不同场景怎么使用。", ["shangguan", "zhaojun"], [1, 1, 0, 4, 2, 3]]
  ]},
  { tag: "被催促", title: "别人催你给答案，但你还没有完全想清楚，你会？", hint: "看你怎样处理速度和确定性。", options: [
    ["给出目前最稳的判断，并说清风险。", ["wu", "banzhao"], [4, 3, 3, 0, 3, 1]],
    ["先给一个可执行的版本，路上再改。", ["mulan", "xie"], [1, 4, 0, 0, 2, 3]],
    ["告诉对方我还在感受哪些关键信号。", ["liqing", "cai"], [3, 1, 1, 1, 3, 4]],
    ["先问清楚对方真正需要的是结论还是陪伴。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 2, 3]]
  ]},
  { tag: "面对规则", title: "当一条规则明显不再适用，你会？", hint: "你会服从、修补、绕开，还是重新定义它？", options: [
    ["研究它为什么存在，再决定怎样改。", ["wu", "banzhao"], [4, 2, 3, 0, 3, 2]],
    ["先绕开最碍事的部分，把目标完成。", ["mulan", "xie"], [1, 4, 1, 0, 2, 3]],
    ["观察它对不同人的影响，再提出改变。", ["zhaojun", "liqing"], [2, 1, 1, 4, 2, 3]],
    ["把新规则写成别人也能照着走的方法。", ["banzhao", "shangguan"], [3, 1, 2, 2, 3, 4]]
  ]},
  { tag: "压力之下", title: "连续几天高压后，你最需要什么？", hint: "选你真实会寻找的恢复方式。", options: [
    ["重新安排秩序，让失控的部分有名字。", ["wu", "banzhao"], [4, 1, 2, 0, 4, 1]],
    ["彻底离开原来的场景，做点身体能参与的事。", ["mulan", "cai"], [1, 4, 0, 1, 4, 1]],
    ["安静下来，写下真正让自己难受的地方。", ["liqing", "xie"], [3, 0, 2, 1, 3, 4]],
    ["找一个信任的人，让情绪有出口。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 3, 2]]
  ]},
  { tag: "旁观与参与", title: "你发现一件不公平的事，通常会？", hint: "看你会在何时把观察变成行动。", options: [
    ["先收集证据，找到真正能改变它的杠杆。", ["wu", "banzhao"], [4, 2, 3, 0, 3, 1]],
    ["先站到受影响的人身边。", ["mulan", "cai"], [1, 4, 0, 3, 4, 1]],
    ["先确认不同的人各自看见了什么。", ["zhaojun", "liqing"], [2, 1, 0, 4, 2, 3]],
    ["直接指出矛盾，哪怕气氛会变紧。", ["xie", "shangguan"], [2, 4, 2, 1, 2, 4]]
  ]},
  { tag: "成就感", title: "哪一种时刻最容易让你觉得“值得”？", hint: "你追求的成就感，会决定你愿意长期坚持什么。", options: [
    ["局面终于按照更好的秩序运转。", ["wu", "banzhao"], [4, 2, 2, 0, 3, 1]],
    ["从没人走过的地方，真的走出了结果。", ["mulan", "xie"], [1, 4, 0, 0, 2, 3]],
    ["一句话或一件作品，让人被理解了。", ["liqing", "cai"], [2, 1, 1, 2, 3, 4]],
    ["不同的人愿意重新坐到一起。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 2, 3]]
  ]},
  { tag: "被否定", title: "你的努力被轻描淡写地否定了，你会？", hint: "不是测你会不会生气，而是看你怎么保住自己。", options: [
    ["把事实、成果和下一步选择摆到台面上。", ["wu", "xie"], [4, 3, 3, 0, 2, 2]],
    ["先把事情做出更不可忽略的结果。", ["mulan", "cai"], [1, 4, 0, 0, 4, 1]],
    ["允许自己难过一会儿，再决定是否解释。", ["liqing", "cai"], [2, 1, 1, 1, 4, 4]],
    ["找到能真正听懂的人，不在错误的地方证明。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 3, 2]]
  ]},
  { tag: "长期道路", title: "你更愿意选择哪一种人生节奏？", hint: "没有标准答案，只有你愿意认领的方向。", options: [
    ["掌握关键变量，慢慢扩大自己的选择权。", ["wu", "banzhao"], [4, 2, 2, 0, 4, 1]],
    ["保持身体和心都在场，边走边开新路。", ["mulan", "xie"], [1, 4, 1, 0, 3, 3]],
    ["保留感受与作品，不让生活只剩效率。", ["liqing", "cai"], [2, 1, 1, 1, 3, 4]],
    ["让不同的人都找到能够呼吸的位置。", ["zhaojun", "shangguan"], [1, 1, 0, 4, 3, 2]]
  ]},
  { tag: "自我命名", title: "如果要给自己的力量取一个名字，你更接近？", hint: "选一个你愿意认领的词。", options: [
    ["把混乱变成秩序的手。", ["wu", "banzhao"], [4, 2, 3, 0, 3, 2]],
    ["在风里也不后退的脚。", ["mulan", "xie"], [1, 4, 1, 0, 3, 3]],
    ["把感受写成光的心。", ["liqing", "cai"], [2, 1, 1, 1, 3, 4]],
    ["让彼此靠近又不失自己的桥。", ["zhaojun", "shangguan"], [1, 1, 1, 4, 3, 3]]
  ]},
  { tag: "最后一问", title: "如果给自己留一句古风判词，你更愿意是哪一句？", hint: "选一句你想带走的话。", options: [
    ["执灯照远局，落子自有声。", ["wu", "banzhao"], [4, 1, 2, 0, 3, 2]],
    ["不问前路窄，先向风里行。", ["mulan", "xie"], [1, 4, 0, 0, 3, 3]],
    ["心有微澜处，亦可成文章。", ["liqing", "cai"], [2, 0, 1, 1, 3, 4]],
    ["愿作渡人桥，不失自家舟。", ["zhaojun", "shangguan"], [1, 1, 1, 4, 3, 2]]
  ]}
];

const dimensions = ["谋局", "破局", "边界", "和合", "复原", "表达"];
const app = document.querySelector("#app");
let state = { screen: "home", current: 0, answers: [], scores: makeScores(), lastResult: null };

function makeScores() { return Object.fromEntries(Object.keys(figures).map((key) => [key, 0])); }
function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
function saveProgress() { localStorage.setItem(PROGRESS_KEY, JSON.stringify({ current: state.current, answers: state.answers, scores: state.scores })); }
function restoreProgress() { try { const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY)); if (saved && Array.isArray(saved.answers) && saved.answers.length && saved.current < questions.length) { state.current = saved.current; state.answers = saved.answers; state.scores = saved.scores || makeScores(); return true; } } catch { /* ignore */ } return false; }
function resetProgress() { localStorage.removeItem(PROGRESS_KEY); state.current = 0; state.answers = []; state.scores = makeScores(); }
function rebuildScores() { state.scores = makeScores(); state.answers.forEach((answerIndex, questionIndex) => { if (answerIndex === undefined) return; const option = questions[questionIndex]?.options[answerIndex]; if (!option) return; option[1].forEach((key) => { state.scores[key] += 3; }); option[2].forEach((value, index) => { state.scores[Object.keys(figures)[index]] += Math.round(value / 2); }); }); }
function scrollTop() { window.scrollTo({ top: 0, behavior: "smooth" }); app.focus({ preventScroll: true }); }
function showToast(message) { let toast = document.querySelector(".toast"); if (!toast) { toast = document.createElement("div"); toast.className = "toast"; document.body.appendChild(toast); } toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200); }

function renderHome() {
  const resumed = restoreProgress();
  app.innerHTML = `<section class="home-shell" id="home">
    <div class="hero-copy">
      <p class="eyebrow">ANCIENT WOMEN / ARCHIVE 01</p>
      <h1>你最像哪位<br /><span>古代女性人物？</span></h1>
      <p class="hero-lede">从选择、关系、压力与表达里，看见你身上那种古老又当下的力量。</p>
      <div class="hero-actions"><button class="primary-btn" data-action="start">开始测试 <span aria-hidden="true">↗</span></button><a class="secondary-btn" href="#how">了解测试</a></div>
      <p class="privacy-note">18 个原创情境 · 约 5 分钟 · 不需要登录 · 答案只保存在你的浏览器</p>
      ${resumed ? `<button class="text-btn resume-btn" data-action="resume">继续上次进度（第 ${Math.min(state.current + 1, questions.length)} 题）</button>` : ""}
    </div>
    <div class="hero-visual" aria-label="示例人物卡片">
      <div class="hero-card">
        <div class="hero-card-meta"><span>人物档案</span><span>001 / 008</span></div>
        <div class="hero-card-orbit" aria-hidden="true"><span></span><i></i></div>
        <div class="hero-card-content"><p class="hero-card-label">SAMPLE RESULT</p><h2>谢道韫</h2><p>清醒而有锋芒，不把判断力交给人群。</p></div>
        <div class="hero-card-footer"><span>清醒型</span><span class="blue-dot" aria-hidden="true"></span><span>可保存 · 可分享</span></div>
      </div>
      <div class="hero-float-note"><strong>8</strong><span>位古代女性人物</span></div>
    </div>
  </section>
  <section class="metric-strip" aria-label="测试信息"><div><strong>18</strong><span>个原创情境</span></div><div><strong>5 min</strong><span>完成一次测试</span></div><div><strong>01</strong><span>张人物判词卡</span></div></section>
  <section class="section" id="how"><div class="section-heading"><p class="section-label">HOW IT WORKS</p><h2>测到的，不只是“像谁”。</h2><p>每道题都把历史人物的精神气质，翻译成今天仍会遇到的选择。</p></div><div class="feature-grid"><article class="feature"><span class="feature-index">01 / 看选择</span><h3>你如何进入一场局</h3><p>从陌生环境、规则变化到被误解，观察你默认采取的动作。</p></article><article class="feature"><span class="feature-index">02 / 看关系</span><h3>你怎样和人相处</h3><p>看你如何处理边界、冲突、陪伴，以及那些没有标准答案的时刻。</p></article><article class="feature"><span class="feature-index">03 / 看回声</span><h3>你会留下什么</h3><p>最后生成一张人物原型卡，把一句判词和一段提醒带走。</p></article></div></section>
  <section class="section sample-section" id="result-preview"><div class="section-heading"><p class="section-label">RESULT PREVIEW</p><h2>结果会长什么样？</h2><p>每个人的答案不同，人物原型也会不同。这里先看一张示例。</p></div><div class="report-list"><div class="report-row"><strong>人物原型</strong><p>谢道韫 · 清醒型：有自己的尺度，不轻易把判断交给人群。</p></div><div class="report-row"><strong>你的力量</strong><p>你能在热闹里保持观察，也能在需要时说出关键的一句。</p></div><div class="report-row"><strong>给你的提醒</strong><p>清醒不是永远站在局外，值得的人和事也可以参与得更深。</p></div></div></section>
  <section class="section"><div class="section-heading"><p class="section-label">BEFORE YOU START</p><h2>开始前，先知道。</h2><p>这是一个带历史意象的趣味自我观察，不替你下结论。</p></div><div class="faq"><details><summary>会不会把我和真实历史人物等同？</summary><p>不会。结果是基于原创题目的娱乐性人物原型映射，不代表历史评价，也不声称复刻人物本人。</p></details><details><summary>需要登录或提交个人信息吗？</summary><p>不需要。答案与进度只保存在当前浏览器的本地存储里。</p></details><details><summary>可以保存结果吗？</summary><p>可以。结果页支持下载一张人物判词卡，也能复制结果文案。</p></details></div></section>`;
  document.querySelector('[data-action="start"]')?.addEventListener("click", () => { resetProgress(); state.screen = "quiz"; renderQuiz(); scrollTop(); });
  document.querySelector('[data-action="resume"]')?.addEventListener("click", () => { state.screen = "quiz"; renderQuiz(); scrollTop(); });
}

function renderQuiz() {
  const question = questions[state.current];
  const progress = Math.round(((state.current + 1) / questions.length) * 100);
  app.innerHTML = `<section class="quiz-shell"><header class="quiz-header"><button class="icon-button" data-action="quit" aria-label="暂存并退出">×</button><span class="quiz-wordmark">古代女性人物</span><span class="quiz-count">${String(state.current + 1).padStart(2, "0")} / ${questions.length}</span></header><div class="progress-track" role="progressbar" aria-label="答题进度" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${state.current + 1}"><div class="progress-fill" style="width:${progress}%"></div></div><div class="question-wrap"><p class="question-kicker">${escapeHTML(question.tag)}</p><h1 class="question-title">${escapeHTML(question.title)}</h1><p class="question-hint">${escapeHTML(question.hint)}</p><div class="option-grid" role="list">${question.options.map((option, index) => `<button class="option" data-option="${index}" role="listitem"><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${escapeHTML(option[0])}</span><span class="option-arrow" aria-hidden="true">↗</span></button>`).join("")}</div></div><div class="quiz-actions"><button class="text-btn" data-action="back" ${state.current === 0 ? "disabled" : ""}>← 上一题</button><span>选择一项继续</span></div></section>`;
  document.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => chooseOption(Number(button.dataset.option))));
  document.querySelector('[data-action="back"]')?.addEventListener("click", () => { if (state.current > 0) { state.current -= 1; renderQuiz(); scrollTop(); } });
  document.querySelector('[data-action="quit"]')?.addEventListener("click", () => { saveProgress(); state.screen = "home"; renderHome(); scrollTop(); showToast("进度已保存"); });
}
function chooseOption(index) { state.answers[state.current] = index; rebuildScores(); saveProgress(); if (state.current === questions.length - 1) finishQuiz(); else { state.current += 1; renderQuiz(); scrollTop(); } }
function finishQuiz() { const ranked = Object.entries(state.scores).sort((a, b) => b[1] - a[1]); state.lastResult = { key: ranked[0][0], scores: state.scores, at: Date.now() }; localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lastResult)); localStorage.removeItem(PROGRESS_KEY); state.screen = "result"; renderResult(); scrollTop(); }
function dimensionScores(scores) { const keys = Object.keys(figures); const raw = [scores.wu + scores.banzhao, scores.mulan + scores.xie, scores.wu + scores.xie, scores.zhaojun + scores.shangguan, scores.cai + scores.banzhao, scores.liqing + scores.shangguan]; const max = Math.max(...raw, 1); return dimensions.map((name, index) => ({ name, value: Math.min(96, Math.max(38, Math.round((raw[index] / max) * 88))) })); }
function renderResult() {
  const stored = state.lastResult || JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  if (!stored) { state.screen = "home"; renderHome(); return; }
  const figure = figures[stored.key]; const dims = dimensionScores(stored.scores); state.lastResult = stored;
  app.innerHTML = `<section class="result-shell"><div class="result-layout"><div class="result-copy"><p class="result-kicker">你的古代女性人物原型 / 已生成</p><h1 style="--figure-color:${figure.color}">${figure.name}</h1><p class="result-tagline">${figure.type} <span aria-hidden="true">·</span> ${figure.tagline}</p><p class="result-body">${figure.body}</p><div class="result-actions"><button class="primary-btn" data-action="download">下载判词卡</button><button class="secondary-btn" data-action="copy">复制结果文案</button></div><p class="result-disclaimer">娱乐性人物原型映射，不构成历史评价、心理测评或人生结论。</p><div class="dimension-list"><div class="dimension-heading"><span>你的六个维度</span><span>相对倾向</span></div>${dims.map((dim) => `<div class="dimension"><span>${dim.name}</span><div class="dimension-bar"><i style="width:${dim.value}%;background:${figure.color}"></i></div><span>${dim.value}</span></div>`).join("")}</div></div><div class="share-card" id="share-card" style="--figure-color:${figure.color}"><div class="share-card-top"><span>古代女性人物</span><span>判词 / 018</span></div><div class="share-card-main"><p class="share-card-label">${figure.english}</p><h2>${figure.name}</h2><p class="quote">“${figure.share}”</p></div><div class="share-card-footer"><span>${figure.type}</span><strong>保存 / 分享</strong></div></div></div><div class="result-bottom"><button class="text-btn" data-action="again">↻ 重新测试</button><button class="text-btn" data-action="home">⌂ 回到首页</button></div></section>`;
  document.querySelector('[data-action="download"]').addEventListener("click", () => downloadCard(figure, dims));
  document.querySelector('[data-action="copy"]').addEventListener("click", () => copyResult(figure));
  document.querySelector('[data-action="again"]').addEventListener("click", () => { resetProgress(); state.screen = "quiz"; renderQuiz(); scrollTop(); });
  document.querySelector('.result-shell [data-action="home"]').addEventListener("click", () => { state.screen = "home"; renderHome(); scrollTop(); });
}
function copyResult(figure) { const text = `我的古代女性人物原型是「${figure.name} · ${figure.type}」\n${figure.tagline}\n${figure.share}\n测一测你最像哪位古代女性人物？`; if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => showToast("结果文案已复制")).catch(() => showToast("请长按选择结果文案")); else showToast("请长按选择结果文案"); }
function wrapText(ctx, text, x, y, maxWidth, lineHeight) { let line = ""; let lineY = y; for (const char of text) { const test = line + char; if (ctx.measureText(test).width > maxWidth && line) { ctx.fillText(line, x, lineY); line = char; lineY += lineHeight; } else line = test; } ctx.fillText(line, x, lineY); }
function downloadCard(figure, dims) { const canvas = document.createElement("canvas"); canvas.width = 1080; canvas.height = 1440; const ctx = canvas.getContext("2d"); ctx.fillStyle = "#f5f5f7"; ctx.fillRect(0, 0, 1080, 1440); ctx.fillStyle = "#1d1d1f"; ctx.fillRect(0, 0, 1080, 18); ctx.fillStyle = figure.color; ctx.fillRect(0, 0, 1080, 18); ctx.fillStyle = "#6e6e73"; ctx.font = "22px Arial, sans-serif"; ctx.fillText("古代女性人物", 85, 92); ctx.fillText("判词 / 018", 850, 92); ctx.fillStyle = "#0071e3"; ctx.fillRect(85, 120, 108, 8); ctx.fillStyle = "#1d1d1f"; ctx.font = "600 145px Arial, sans-serif"; ctx.fillText(figure.name, 85, 560); ctx.fillStyle = "#424245"; ctx.font = "28px Arial, sans-serif"; wrapText(ctx, `“${figure.share}”`, 85, 660, 790, 48); ctx.fillStyle = "#6e6e73"; ctx.font = "20px Arial, sans-serif"; ctx.fillText(figure.english, 85, 860); dims.forEach((dim, index) => { const y = 955 + index * 54; ctx.fillStyle = "#424245"; ctx.font = "20px Arial, sans-serif"; ctx.fillText(dim.name, 85, y); ctx.fillStyle = "#d2d2d7"; ctx.fillRect(220, y - 17, 600, 12); ctx.fillStyle = figure.color; ctx.fillRect(220, y - 17, dim.value * 6, 12); ctx.fillStyle = "#1d1d1f"; ctx.fillText(String(dim.value), 850, y); }); ctx.fillStyle = "#6e6e73"; ctx.font = "18px Arial, sans-serif"; ctx.fillText("趣味自我观察 · 不构成历史评价或心理测评", 85, 1310); ctx.fillText("ancient women persona archive / 2026", 85, 1355); const link = document.createElement("a"); link.download = `古代女性人物-${figure.name}.png`; link.href = canvas.toDataURL("image/png"); link.click(); showToast("判词卡已下载"); }

function boot() { const saved = localStorage.getItem(STORAGE_KEY); if (location.hash === "#result" && saved) state.screen = "result"; if (state.screen === "result") renderResult(); else renderHome(); }
window.addEventListener("hashchange", boot);
document.querySelector(".brand")?.addEventListener("click", (event) => { event.preventDefault(); state.screen = "home"; renderHome(); scrollTop(); });
boot();
