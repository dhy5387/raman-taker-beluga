import './App.css'

const langs = [
  {
    flag: '🇰🇷', label: '한국어',
    greeting: '제 작품에 관심을 가져주셔서 감사합니다!',
    desc: '협업이나 사진/동영상 관련 문의는 아래 형식에 맞춰\n이메일을 보내주세요!',
    format: [
      ['이름', '당신의 이름'],
      ['목적', 'ex) 사진/동영상에 대한 문의'],
      ['본인 이메일', '이메일 주소를 입력해주세요'],
    ],
    note: '사진은 이메일란에 적힌 주소로 송부되며,\n파일 관련 소통도 해당 이메일에서 진행됩니다.',
    warning: '⚠️ 형식에 맞지 않은 이메일은 무통보 전부 삭제됩니다 ⚠️',
  },
  {
    flag: '🇺🇸', label: 'English',
    greeting: 'Thank you for your interest in my work!',
    desc: 'For collaboration or photo/video inquiries,\nplease email me using the format below!',
    format: [
      ['Name', 'Your Name'],
      ['Purpose', 'ex) Inquiry about photos/videos'],
      ['Your Email', 'Your email address'],
    ],
    note: 'Photos will be sent to the email address you provide,\nand all file-related communication will take place there.',
    warning: '⚠️ Emails not following the format will be deleted without notice ⚠️',
  },
  {
    flag: '🇯🇵', label: '日本語',
    greeting: '私の作品にご関心をいただきありがとうございます！',
    desc: 'コラボや写真・動画のお問い合わせは\n下記の形式でメールをお送りください！',
    format: [
      ['お名前', 'あなたのお名前'],
      ['目的', '例）写真・動画のお問い合わせ'],
      ['メールアドレス', 'ご自身のメールアドレス'],
    ],
    note: '写真はメール欄のアドレスへ送付されます。\nファイルのやり取りもそちらで行います。',
    warning: '⚠️ 形式に沿っていないメールは予告なく削除いたします ⚠️',
  },
  {
    flag: '🇨🇳', label: '中文',
    greeting: '感谢您对我的作品感兴趣！',
    desc: '如需合作或咨询照片/视频相关事宜，\n请按以下格式发送邮件！',
    format: [
      ['姓名', '您的姓名'],
      ['目的', '例）关于照片/视频的咨询'],
      ['您的邮箱', '邮箱地址'],
    ],
    note: '照片将发送至您填写的邮箱，\n文件相关沟通也将通过该邮箱进行。',
    warning: '⚠️ 未按格式发送的邮件将不作通知直接删除 ⚠️',
  },
]

function App() {
  return (
    <div className="portfolio">
      {/* 수중 배경 */}
      <div className="underwater-bg" aria-hidden="true">
        <div className="light-rays" />
        {[8,5,3,12,7,4,10,6,2,9,11,5,8,3].map((size, i) => (
          <div key={i} className="bubble" style={{
            '--delay': `${(i * 0.65).toFixed(1)}s`,
            '--left':  `${(i * 7 + 5) % 95}%`,
            '--size':  `${size}px`,
            '--speed': `${5 + (i % 5) * 1.5}s`,
          }} />
        ))}
      </div>

      {/* 네비게이션 */}
      <nav className="nav">
        <span className="nav-logo">RTB</span>
        <ul className="nav-links">
          <li><a href="#about">소개</a></li>
          <li><a href="#works">작업물</a></li>
          <li><a href="#skills">기술</a></li>
          <li><a href="#contact">문의</a></li>
        </ul>
      </nav>

      {/* 히어로 */}
      <section className="hero" id="about">
        <div className="hero-content">
          <h1 className="hero-title">라면 먹는 벨루가</h1>
          <p className="hero-username">@raman_taker_beluga</p>
          <p className="hero-subtitle">AI Image / Video Creator</p>
          <p className="hero-desc">
            AI 기술을 활용한 이미지·영상 창작 활동을 이어가고 있습니다.
          </p>
          <div className="hero-btns">
            <a href="#works" className="btn btn-primary">작업물 보기</a>
            <a href="#contact" className="btn btn-outline">연락하기</a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src="https://i.imgur.com/EIxVBBI.png" alt="라면 먹는 벨루가" />
        </div>
        <div className="ocean-layer ocean-layer-1" />
        <div className="ocean-layer ocean-layer-2" />
        <div className="ocean-layer ocean-layer-3" />
      </section>

      {/* 작업물 */}
      <section className="section" id="works">
        <h2 className="section-title">작업물 샘플</h2>
        <div className="gallery">
          {[
            { src: 'https://i.imgur.com/EPDjygl.jpeg', type: 'image' },
            { src: 'https://i.imgur.com/buqSGhR.jpeg', type: 'image' },
            { src: 'https://i.imgur.com/kWEMNPk.jpeg', type: 'image' },
            { src: 'https://i.imgur.com/6RYAn3c.png',  type: 'image' },
            { src: 'https://i.imgur.com/nAQonrf.jpeg', type: 'image' },
            { src: 'https://i.imgur.com/ZDdlERx.mp4',  type: 'video' },
          ].map((item, i) => (
            <div key={i} className="gallery-item">
              {item.type === 'video' ? (
                <video src={item.src} controls muted loop playsInline />
              ) : (
                <img src={item.src} alt={`작업물 ${i + 1}`} loading="lazy" onClick={() => window.open(item.src, '_blank')} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="section section-alt" id="skills">
        <h2 className="section-title">사용 툴</h2>
        <div className="skills-grid">
        </div>
      </section>

      {/* 문의 */}
      <section className="section" id="contact">
        <h2 className="section-title">문의</h2>
        <p className="contact-intro">아래 형식에 맞춰 이메일로 문의해주세요</p>
        <div className="contact-flag-row">
          <span>🇰🇷</span>
          <span>🇺🇸</span>
          <span>🇯🇵</span>
          <span>🇨🇳</span>
        </div>
        <div className="contact-lang-grid">
          {langs.map((lang, i) => (
            <div key={i} className="contact-lang-card">
              <div className="lang-card-header">
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-name">{lang.label}</span>
              </div>
              <p className="lang-greeting">{lang.greeting}</p>
              <p className="lang-desc">{lang.desc}</p>
              <div className="lang-format">
                {lang.format.map(([key, val], j) => (
                  <div key={j} className="format-row">
                    <span className="format-key">{key}</span>
                    <span className="format-colon"> : </span>
                    <span className="format-val">{val}</span>
                  </div>
                ))}
              </div>
              <p className="lang-note">{lang.note}</p>
              <div className="lang-warning">{lang.warning}</div>
            </div>
          ))}
        </div>
        <div className="contact-form-divider">폼으로 바로 문의하기</div>
        <form
          className="contact-form"
          action="https://formspree.io/f/mzdkeagl"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.target
            const btn = form.querySelector('button[type="submit"]')
            btn.disabled = true
            btn.textContent = '전송 중...'
            try {
              const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
              })
              if (res.ok) {
                form.innerHTML = '<p class="form-success">✅ 메시지가 전송되었습니다. 감사합니다!</p>'
              } else {
                throw new Error()
              }
            } catch {
              btn.disabled = false
              btn.textContent = '보내기'
              alert('전송 중 오류가 발생했습니다. 다시 시도해주세요.')
            }
          }}
        >
          <div className="form-row">
            <input type="text" name="name" placeholder="이름" required />
            <input type="email" name="email" placeholder="이메일" required />
          </div>
          <textarea name="message" placeholder="어떤 목적으로 방문하셨나요?" rows={5} required />
          <button type="submit" className="btn btn-primary">보내기</button>
        </form>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <p>© 2025 라면 먹는 벨루가</p>
        <span>@raman_taker_beluga</span>
      </footer>
    </div>
  )
}

export default App
