import './App.css'

function App() {
  return (
    <div className="portfolio">
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
        <div className="hero-avatar">🐳</div>
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
        <p className="contact-desc">
          협업을 원하시거나 사진/동영상에 대해서 문의를 원하신다면 아래에 본인의 이메일과 함께 문의할 내용을 남겨주세요! 빠른 시일 내에 답변드리겠습니다. 감사합니다!<br />
          If you'd like to collaborate or have any inquiries about photos/videos, please leave your email along with your message below! I will get back to you as soon as possible. Thank you!<br />
          コラボをご希望の方や写真・動画についてお問い合わせがある方は、メールアドレスとお問い合わせ内容を下記にお残しください！できる限り早くご返信いたします。ありがとうございます！<br />
          如果您希望合作或对照片/视频有任何疑问，请在下方留下您的邮箱和咨询内容！我会尽快回复您。谢谢！
        </p>
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
          <textarea name="message" placeholder="메시지를 입력해주세요." rows={5} required />
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
