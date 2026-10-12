import { company, service, urls } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

function Label({ no, children }: { no: string; children: string }) {
  return <p className="label"><span>{no}</span> / {children}</p>;
}

export default function Home() {
  const rows: [string, string][] = [
    ["会社名", company.name],
    ["代表者", company.representative],
    ["設立", company.established],
    ["資本金", company.capital],
    ["所在地", company.address],
  ];
  return (
    <>
      <header className="header">
        <div className="wrap header-inner">
          <a href="#" className="logo">{company.nameEn}</a>
          <nav className="nav-pc">
            {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <details className="nav-sp">
            <summary aria-label="メニュー">Menu</summary>
            <nav>{nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <h1 className="display">We build<br />&amp; run<br />your <em>web.</em></h1>
            <p className="hero-sub">ホームページ制作から、ドメイン・サーバーの運用まで。<br />小さな会社のWebを、まるごと引き受けます。</p>
          </div>
          <span className="scroll">Scroll</span>
        </section>

        <section id="about" className="section">
          <div className="wrap grid">
            <Label no="01">About</Label>
            <div className="reveal">
              <h2 className="heading">作って終わりにしない。<br />Webを、事業の資産に。</h2>
              <p className="body">
                ホームページは公開してからが本番です。{company.name}は、制作だけでなくドメインやサーバーの管理、日々の更新までを一つの窓口で担い、お客様が本業に集中できる環境をつくります。
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section dark">
          <div className="wrap grid">
            <Label no="02">Services</Label>
            <ul className="services">
              {company.business.map((b, i) => (
                <li key={b}>
                  <a href={urls.lp}>
                    <span className="no">0{i + 1}</span>
                    <span className="name">{b}</span>
                    <span className="arrow" aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="wrap">
            <a href={urls.lp} className="more">{service.name}の詳細を見る →</a>
          </div>
        </section>

        <section id="company" className="section">
          <div className="wrap grid">
            <Label no="03">Company</Label>
            <dl className="info reveal">
              {rows.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
              <div>
                <dt>事業内容</dt>
                <dd><ul>{company.business.map((b) => <li key={b}>{b}</li>)}</ul></dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <Label no="04">Contact</Label>
            <a href={`mailto:${company.email}`} className="contact-link">
              <span className="display">Let&apos;s talk.</span>
              <span className="contact-mail">{company.email} →</span>
            </a>
            <p className="contact-note">ご相談・お見積りは無料です。</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p className="logo">{company.nameEn}</p>
          <nav>{nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}</nav>
          <p className="copy">© {new Date().getFullYear()} {company.name}</p>
        </div>
      </footer>
    </>
  );
}
