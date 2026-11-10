import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Rank - The Money App for Communities | Save, Invest \u0026 Build Wealth" }] }),
  staticData: { importedDocument: { html: { "className": "lenis lenis-smooth", "lang": "en" }, body: {  } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <div id="__nuxt">
        <div className="viewport">
          <ImportedHeader />
          <main className="index page [background-color:var(--bg)] [min-height:100svh]" style={{ "--bg": "#26120a" } as CSSProperties}>
            <ImportedSectionTheMoneyAppFor />
            <ImportedSection />
            <div className="index-product-track">
              <ImportedSection2 />
            </div>
            <ImportedSectionFundLifeChangingGoals />
            <ImportedSectionRealImpactRealStories />
            <ImportedSectionHowWeKeepYour />
            <ImportedSectionTheRankDifference />
            <ImportedSectionMoneypedia />
            <ImportedSectionHearDirectlyFromOur />
          </main>
          <div className="index-recognized items-center justify-between relative [background-color:rgb(252,248,232)] [z-index:1] [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[gap:2rem]">
            <h2 className="capitalize [color:rgb(38,18,10)]">Recognized by the Financial Times</h2>
            <figure className="[@media(max-width:759px)]:[order:2]">
              <img src="/site-assets/b724478ff7cdbac9.webp" alt="" />
            </figure>
            <p className="[color:rgb(38,18,10)]"> We are recognised as One of Africa's fastest growing companies. More than a milestone, it's a testament to the users we've helped grow and the future we're building together. </p>
          </div>
          <ImportedFooterWebsiteFooter />
        </div>
      </div>
      <div id="teleports" />
    </>
  );
}

function ImportedHeader() {
  return (
    <header className="header items-center gap-[2.4rem] fixed [left:0px] [right:0px] [top:0px] [z-index:99] [@media(max-width:759px)]:justify-between [@media(max-width:759px)]:[transition:transform_0.3s,opacity_0.3s] [opacity:1]" style={{ visibility: "inherit" } as CSSProperties} role="banner">
      <a className={"skip-link absolute no-underline [background:rgb(0,0,0)] [left:50%] [transition:top_0.3s] [z-index:9999] [&:focus]:[outline:rgb(255,107,0)_solid_2px] [&:focus]:[outline-offset:2px]"} href="#main-content">Skip to main content</a>
      <a className="header-logo h-[2.736rem] relative no-underline w-[9.345rem] [z-index:1]" style={{ filter: "invert(0)" } as CSSProperties} aria-current="page" aria-label="Rank - Go to homepage" href="/">
        <svg width="94" height="28" viewBox="0 0 94 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rank logo">
          <path style={{ fill: "white", fillOpacity: "1" } as CSSProperties} d="M46.6389 24.6754H41.6871L37.5761 16.9934H34.7733V24.6754H30.1641V2.81641H39.0398C43.649 2.81641 46.4828 5.50178 46.4828 9.87388C46.4828 13.0278 44.9258 15.4322 42.2162 16.4628V16.4938L46.6384 24.6754H46.6389ZM38.4793 12.7778C40.6906 12.7778 41.8736 11.7472 41.8736 9.84238C41.8736 7.93762 40.7525 7.03199 38.4793 7.03199H34.7733V12.7778H38.4793Z" fill="white" />
          <path style={{ fill: "white", fillOpacity: "1" } as CSSProperties} d="M52.5808 14.8712C55.1966 14.2466 56.0065 13.7781 56.0065 12.9039C56.0065 11.9358 55.1966 11.3737 53.7328 11.3737C52.0202 11.3737 50.93 12.3104 50.5874 14.0281L46.5078 13.1225C46.7567 11.4677 47.5357 10.1561 48.8747 9.15692C50.2138 8.15777 51.8332 7.6582 53.7328 7.6582C57.8747 7.6582 60.491 10.0625 60.491 13.9351V24.6771H56.5047V23.1182H56.4424C56.0258 24.1381 54.4702 25.1456 52.1135 25.1456C48.8433 25.1456 46.6948 23.1783 46.6948 20.1804C46.6948 17.4011 48.3451 15.9019 52.5808 14.8712ZM56.1621 16.6825H56.0998C55.8195 17.182 55.1342 17.5881 53.6395 17.9941C51.6466 18.5247 50.9614 19.0248 50.9614 19.8989C50.9614 20.8981 51.6466 21.3976 52.9857 21.3976C54.8544 21.3976 56.1621 20.461 56.1621 19.0868V16.6825Z" fill="white" />
          <path style={{ fill: "white", fillOpacity: "1" } as CSSProperties} d="M61.7856 8.12628H66.0208V9.59398H66.0831C67.0487 8.37631 68.7927 7.6582 70.63 7.6582C72.4673 7.6582 73.8996 8.25129 74.9898 9.40694C76.111 10.5626 76.6715 12.1238 76.6715 14.0911V24.6771H72.2184V14.8717C72.2184 12.9044 71.1282 11.7803 69.2286 11.7803C67.329 11.7803 66.2387 12.9669 66.2387 14.8717V24.6771H61.7852V8.12628H61.7856Z" fill="white" />
          <path style={{ fill: "white", fillOpacity: "1" } as CSSProperties} d="M77.8164 1.88086H82.27V14.3716H82.3323L87.6268 8.12623H93.2948L87.3465 14.7466L93.4509 24.6765H88.4367L84.5127 17.7131H84.4504L82.2705 20.2739V24.677H77.8169V1.88086H77.8164Z" fill="white" />
          <path style={{ fill: "white", fillOpacity: "1" } as CSSProperties} d="M0 17.335V20.6135C0 22.7557 1.70441 24.5529 3.84084 24.5582C5.09727 24.5616 6.21309 23.9612 6.91814 23.0304C7.01528 22.902 7.21921 22.9703 7.21921 23.1317V23.4093C7.21921 25.6722 9.06665 27.4917 11.3191 27.3482C13.3303 27.2198 14.9226 25.5433 14.9226 23.4941V23.1317C14.9226 22.9703 15.1261 22.902 15.2237 23.0304C15.9287 23.9608 17.0446 24.5611 18.301 24.5577C20.4379 24.5519 22.1418 22.7552 22.1418 20.6125V17.334C22.1418 15.7791 21.2241 14.4418 19.9034 13.8298C19.7744 13.7702 19.7744 13.5865 19.9034 13.5265C21.2241 12.9145 22.1418 11.5771 22.1418 10.0222V6.74372C22.1418 4.60104 20.4374 2.80433 18.301 2.79851C17.0446 2.79512 15.9287 3.39548 15.2237 4.32581C15.1266 4.45422 14.9226 4.3859 14.9226 4.22454V3.9469C14.9226 1.68356 13.0752 -0.135924 10.8223 0.00798766C8.81102 0.136393 7.21921 1.81294 7.21921 3.8621V4.22454C7.21921 4.3859 7.01576 4.45422 6.91814 4.32581C6.21309 3.39548 5.09727 2.79512 3.84084 2.79803C1.70441 2.80578 0 4.60249 0 6.74469V10.0232C0 11.5781 0.917683 12.9154 2.23839 13.5274C2.36742 13.587 2.36742 13.7707 2.23839 13.8308C0.917683 14.4427 0 15.7801 0 17.335ZM7.70293 10.0236V9.6612C7.70293 9.50081 7.9059 9.43104 8.00255 9.55847C8.70567 10.4874 9.81762 11.0877 11.0702 11.0877C12.3228 11.0877 13.4347 10.4874 14.1378 9.55896C14.2345 9.43152 14.4374 9.5013 14.4374 9.66168V10.0241C14.4374 11.579 15.3551 12.9164 16.6758 13.5284C16.8049 13.588 16.8049 13.7716 16.6758 13.8317C15.3551 14.4437 14.4374 15.7811 14.4374 17.336V17.6984C14.4374 17.8588 14.2345 17.9286 14.1378 17.8012C13.4347 16.8723 12.3228 16.2724 11.0702 16.2724C9.81762 16.2724 8.70567 16.8728 8.00255 17.8016C7.9059 17.9291 7.70293 17.8593 7.70293 17.6989V17.3365C7.70293 15.7816 6.78525 14.4442 5.46454 13.8322C5.33551 13.7726 5.33551 13.589 5.46454 13.5289C6.78525 12.9169 7.70293 11.5795 7.70293 10.0246V10.0236Z" fill="white" />
        </svg>
      </a>
      <div className="header-download items-center gap-[1.2rem] relative [z-index:1]">
        <p className="text-center [color:rgb(255,255,255)] [letter-spacing:-0.032rem]" style={{ filter: "invert(0)" } as CSSProperties}>Get the app</p>
        <div className="items-center [background:var(--Colors-Orange,color(display-p3_.9686_.4588_0))]">
          <a className="no-underline" aria-label="Download Rank on App Store (opens in new tab)" href="https://apps.apple.com/us/app/rank-save-spend-send/id1578727095" rel="noopener noreferrer" target="_blank">
            <img className="[transition:transform_0.2s_ease-in-out]" src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" data-image-one="" />
          </a>
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="" data-image-two="" role="presentation" />
          <a className="no-underline" aria-label="Download Rank on Google Play (opens in new tab)" href={"https://play.google.com/store/apps/details?id=com.rank.moni&pli=1"} rel="noopener noreferrer" target="_blank">
            <img className="[transition:transform_0.2s_ease-in-out]" src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" data-image-three="" />
          </a>
        </div>
      </div>
      <button className="header-ham rounded-[50%] place-content-center relative [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [z-index:1]" style={{ gap: "0.498rem", backgroundColor: "rgb(255, 107, 0)" }} aria-expanded="false" aria-controls="header-menu" aria-label="Toggle navigation menu">
        <i className="[translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)", backgroundColor: "rgb(255, 255, 255)" }} />
        <i className="[translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)", backgroundColor: "rgb(255, 255, 255)" }}>
          <span className="[grid-area:1/1] [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)", backgroundColor: "rgb(252, 248, 232)" }} />
          <span className="[grid-area:1/1] [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)", backgroundColor: "rgb(252, 248, 232)" }} />
        </i>
        <i className="[translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)", backgroundColor: "rgb(255, 255, 255)" }} />
      </button>
      <nav className="header-menu fixed [backdrop-filter:blur(0.5rem)] [background:rgba(36,11,0,0.75)] [height:100vh] [inset:0px] [overflow:scroll] [overscroll-behavior:contain] [pointer-events:all] [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[height:100vh] [@media(max-width:759px)]:[pointer-events:all] [opacity:0] invisible" id="header-menu" role="navigation" aria-label="Main navigation">
        <div className="header-menu-grid flex-wrap [height:fit-content] [pointer-events:all]">
          <a className="no-underline [pointer-events:all] [translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_7rem)] [opacity:0] invisible" style={{ transform: "translate(0%, 65%)" }} href="/savings" itemProp="url">
            <img className="will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/de287ec30e3b173d.webp" alt="Illustration of a piggy bank representing savings" />
            <p className="self-stretch [color:rgb(255,255,255)]">Save with discipline</p>
            <p className="self-stretch [color:rgba(255,255,255,0.8)] [@media(max-width:759px)]:max-w-[17rem]">Build steady savings.</p>
          </a>
          <a className="no-underline [pointer-events:all] [translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_7rem)] [opacity:0] invisible" style={{ transform: "translate(0%, 65%)" }} href="/circles" itemProp="url">
            <img className="will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/a85774c7153d6976.webp" alt="Illustration of people in a circle representing Circles feature" />
            <p className="self-stretch [color:rgb(255,255,255)]">Move faster with Circles</p>
            <p className="self-stretch [color:rgba(255,255,255,0.8)] [@media(max-width:759px)]:max-w-[17rem]">Access capital in turn.</p>
          </a>
          <a className="no-underline [pointer-events:all] [translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_7rem)] [opacity:0] invisible" style={{ transform: "translate(0%, 65%)" }} href="/tribe" itemProp="url">
            <img className="will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/9c650d17742e36ec.webp" alt="Illustration of a group of people representing Tribe feature" />
            <p className="self-stretch [color:rgb(255,255,255)]">Save with your Tribe</p>
            <p className="self-stretch [color:rgba(255,255,255,0.8)] [@media(max-width:759px)]:max-w-[17rem]">Grow money with your people.</p>
          </a>
          <a className="no-underline [pointer-events:all] [translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_7rem)] [opacity:0] invisible" style={{ transform: "translate(0%, 65%)" }} href="/invest" itemProp="url">
            <img className="will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/1044ae8068bd22f8.webp" alt="Illustration of a growing chart representing investment opportunities" />
            <p className="self-stretch [color:rgb(255,255,255)]">Grow your wealth</p>
            <p className="self-stretch [color:rgba(255,255,255,0.8)] [@media(max-width:759px)]:max-w-[17rem]">Put your money to work.</p>
          </a>
        </div>
        <nav className="header-menu-links flex-1" aria-label="Secondary navigation">
          <div className="flex-1 flex-col [@media(max-width:759px)]:[width:50%]">
            <p className="[color:rgba(255,255,255,0.7)] [letter-spacing:-0.03rem] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>Community</p>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="/community">Rank Community</a>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="/campus-ambassador">Student Ambassador</a>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="/community-activation">Community Activation</a>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="/referral">Refer and Earn</a>
            <p className="[color:rgba(255,255,255,0.7)] [letter-spacing:-0.03rem] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>Learn</p>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="https://blog.userank.com/" rel="noopener noreferrer" target="_blank">Moneypedia <span className="visually-hidden whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden]">(opens in new tab)</span></a>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-current="page" href="/">FAQs</a>
          </div>
          <div className="flex-1 flex-col [@media(max-width:759px)]:[width:50%]">
            <p className="[color:rgba(255,255,255,0.7)] [letter-spacing:-0.03rem] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>Company</p>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-current="page" href="/">About Us</a>
            <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="/careers">Career</a>
            <p className="[color:rgba(255,255,255,0.7)] [letter-spacing:-0.03rem] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>Contact</p>
            <a className="self-stretch [letter-spacing:-0.03rem] [pointer-events:all] [text-decoration:underline_0.02em] [text-underline-offset:0.225em] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="mailto:hello@userank.com" rel="noopener noreferrer">hello@userank.com</a>
            <a className="self-stretch [letter-spacing:-0.03rem] [pointer-events:all] [text-decoration:underline_0.02em] [text-underline-offset:0.225em] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} href="tel:02012297000" rel="noopener noreferrer">02012297000</a>
            <aside className="justify-between [width:100%]" aria-label="Social media links">
              <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-label="Follow us on Instagram (opens in new tab)" href="https://www.instagram.com/rankapp_/" rel="noopener noreferrer" target="_blank">
                <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/ef7d75f8414c2ce2-58fbcf37816247e5726400ce9755d9a4.png" alt="Instagram" />
              </a>
              <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-label="Follow us on X (opens in new tab)" href="https://x.com/rankapp__" rel="noopener noreferrer" target="_blank">
                <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/68a6b226b8abba73-4e8cc074d7db6b92600fe80d46298494.png" alt="X (formerly Twitter)" />
              </a>
              <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-label="Watch our YouTube channel (opens in new tab)" href="https://www.youtube.com/@rank_app" rel="noopener noreferrer" target="_blank">
                <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/56820fda0fc60504-7623343e01a9cea3dd1f95a12e306381.png" alt="YouTube" />
              </a>
              <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-label="Follow us on TikTok (opens in new tab)" href="https://www.tiktok.com/@rankapp_" rel="noopener noreferrer" target="_blank">
                <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/e65c9bff99f499d1-f56542b3cc9ff53b2ad98e97b56fbe79.png" alt="TikTok" />
              </a>
              <a className="self-stretch no-underline [letter-spacing:-0.03rem] [pointer-events:all] [transition:padding-left_0.15s_ease-in-out] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }} aria-label="Follow us on Facebook (opens in new tab)" href="https://www.facebook.com/myrankapp" rel="noopener noreferrer" target="_blank">
                <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/d6c4e05eb31b7f6d-d68c9dde4583f662d0436ad07c7e6dbb.png" alt="Facebook" />
              </a>
            </aside>
          </div>
        </nav>
        <a className="header-menu-cta items-center bottom-[5.25rem] absolute right-[5.12rem] no-underline w-[33.8rem] [background:var(--Colors-Orange,color(display-p3_.9686_.4588_0))] [gap:1rem] [height:fit-content] [overflow:hidden] [pointer-events:all]" aria-label="Download the Rank app (opens in new tab)" href="https://onelink.to/wqs6kf" rel="noopener noreferrer" target="_blank">
          <p className="whitespace-pre [color:rgb(255,255,255)] [letter-spacing:0.016rem]">Download app</p>
          <img src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" />
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="" role="presentation" />
          <img src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" />
          <img src="/site-assets/f4a005efd815f969.png" alt="" role="presentation" />
          <p className="whitespace-pre [color:rgb(255,255,255)] [letter-spacing:0.016rem]">Download app</p>
          <img src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" />
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="" role="presentation" />
          <img src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" />
        </a>
      </nav>
    </header>
  );
}

function ImportedSectionTheMoneyAppFor() {
  return (
    <section className="index-hero relative [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[contain:paint] [@media(max-width:759px)]:[gap:1rem] [@media(max-width:759px)]:[width:100vw] [@media(max-width:759px)]:[z-index:1] [opacity:1]" style={{ visibility: "inherit" } as CSSProperties}>
      <figure className="index-hero-video pointer-events-none [overflow:hidden] [translate:none] [rotate:none] [scale:none] [opacity:1] [visibility:inherit]" style={{ transform: "translate(0px, 0px)" }}>
        <video className="[translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)" }} src="/__l5e/assets-v1/8e565c03-0377-48cd-a8d2-02fffefcc6f8/hero_portrait.mp4" playsInline muted preload="auto" loop autoPlay />
        <aside className="[translate:none] [rotate:none] [scale:none]" style={{ backgroundColor: "rgba(38, 18, 10, 0.3)", transform: "translate(0px, 0px)" }} />
      </figure>
      <div className="index-hero-head relative">
        <a className="index-hero-new items-center gap-[0.6rem] h-[3.2rem] no-underline [overflow:hidden] [transition-duration:0.8s] [transition-property:background-color] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [translate:none] [rotate:none] [scale:none] [opacity:1] [visibility:inherit]" style={{ transform: "translate(0px, 0vh)", width: "30.9rem" }} href="/visionboard" target="_blank">
          <span className="items-center gap-[0.8rem] justify-center [transition-duration:0.8s] [transition-property:background-color,color] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0vh)" }}>New</span>
          <i className="whitespace-pre [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0vh)" }}>Create your 2026 Vision board</i>
          <svg className="ml-[0.4rem] [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0vh)" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="[translate:none] [rotate:none] [scale:none]" style={{ fill: "white", fillOpacity: "0.6" } as CSSProperties} d="M12.1287 8.25163L8.1057 4.22863L9.16635 3.16797L15 9.00163L9.16635 14.8352L8.1057 13.7746L12.1287 9.75163H3V8.25163H12.1287Z" fill="white" fillOpacity="0.6" transform="matrix(1,0,0,1,0,0)" />
          </svg>
        </a>
        <h1 className="[color:rgb(255,255,255)] [@media(max-width:759px)]:self-stretch [@media(max-width:759px)]:[color:rgb(255,255,255)] [translate:none] [rotate:none] [scale:none] [opacity:1] [visibility:inherit]" style={{ transform: "translate(0px, 0vh)" }}>The money app for communities.</h1>
        <p className="relative [color:rgb(255,255,255)] [z-index:2] [@media(max-width:759px)]:w-[40.1rem] [translate:none] [rotate:none] [scale:none] [opacity:1] [visibility:inherit]" style={{ transform: "translate(0px, 0vh) scale(0.85, 0.85)" }}> Access investments and savings with expert human guidance reserved for the ultra-wealthy.<br className="[@media(max-width:759px)]:invisible! [@media(max-width:759px)]:[opacity:0]! [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0vh)" }} data-desktop="" /> Rank gives you this access through the power of people. </p>
      </div>
      <div className="index-hero-right relative [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)" }}>
        <a className="index-hero-cta items-center h-[10.8rem] relative no-underline w-[33.8rem] [background:var(--Colors-Orange,color(display-p3_.9686_.4588_0))] [gap:1rem] [overflow:hidden] [pointer-events:all]" href="https://onelink.to/wqs6kf" target="_blank">
          <p className="whitespace-pre [color:rgb(255,255,255)] [letter-spacing:0.016rem]">Download app</p>
          <img src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" />
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="or" role="presentation" />
          <img src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" />
          <img src="/site-assets/f4a005efd815f969.png" alt="Scan QR code" />
          <p className="whitespace-pre [color:rgb(255,255,255)] [letter-spacing:0.016rem]">Download app</p>
          <img src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" />
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="or" role="presentation" />
          <img src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" />
        </a>
        <div className="gap-[0.6rem] [color:rgb(255,255,255)]"> Licensed by CBN <img src="/site-assets/4e1aa712e83a3943-948b9543803f5b1408a2609656aa3044.png" alt="" /><i className="[color:rgba(255,255,255,0.5)]">・</i> Insured by <img src="/site-assets/1a1f66afd875f6a8.png" alt="" /></div>
      </div>
      <figure className="index-hero-video pointer-events-none [overflow:hidden] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0px, 0px)" }}>
        <video className="[translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 0px)" }} src="/__l5e/assets-v1/8e565c03-0377-48cd-a8d2-02fffefcc6f8/hero_portrait.mp4" playsInline muted preload="auto" loop autoPlay />
        <aside className="[translate:none] [rotate:none] [scale:none]" style={{ backgroundColor: "rgba(38, 18, 10, 0.3)", transform: "translate(0px, 0px)" }} />
      </figure>
    </section>
  );
}

function ImportedSection() {
  return (
    <section className="index-intro place-content-center [@media(max-width:759px)]:relative [@media(max-width:759px)]:[background-color:rgb(252,248,232)] [@media(max-width:759px)]:[contain:paint] [@media(max-width:759px)]:[width:100vw] [opacity:1]" style={{ visibility: "inherit" } as CSSProperties}>
      <p className="index-intro-hidden [@media(max-width:759px)]:text-center [@media(max-width:759px)]:w-[36.1rem] [@media(max-width:759px)]:[color:rgb(38,18,10)] [@media(max-width:759px)]:[letter-spacing:-3%]"> You deserve to be wealthy.<br /> You've saved <i /> for years. Stayed disciplined. <br />Yet the gates to real wealth still feel closed.<br /> We break the lock.<br /> Rank turns your network into your net worth—giving you access to capital through connection,<br /> without debt traps. </p>
      <div className="index-intro-paragraph pointer-events-none text-center top-[12.5vh] [color:rgba(38,18,10,0.4)] [letter-spacing:-0.12rem]">
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">Y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">v</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">
              <i style={{ width: "0rem" }} />
            </div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">b</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">w</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">.</div>
          </div>
        </div>
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">Y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">'</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">v</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">v</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">f</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">.</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">S</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">p</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">.</div>
          </div>
        </div>
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">Y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">g</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">w</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">f</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">.</div>
          </div>
        </div>
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">W</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">b</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">k</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">k</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">.</div>
          </div>
        </div>
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">R</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">k</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">
              <i style={{ width: "0rem" }} />
            </div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">w</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">k</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
          </div>
        </div>
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">w</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">—</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">g</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">v</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">g</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">y</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">p</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">l</div>
          </div>
        </div>
        <div className="index-intro-line gap-[0.2em] justify-center [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 300%)" }}>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">g</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">c</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">n</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">
              <i style={{ width: "0rem" }} />
            </div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">w</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">i</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">h</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">o</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">u</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">d</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">e</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">b</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
          </div>
          <div className="index-intro-word">
            <div className="[color:rgba(38,_18,_10,_0.4)]">t</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">r</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">a</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">p</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">s</div>
            <div className="[color:rgba(38,_18,_10,_0.4)]">.</div>
          </div>
        </div>
        <figure className="index-intro-doodle [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "rotate(-15deg) scale(0.5, 0.5)" }}>
          <img src="/site-assets/ecfc9b1507b71406.webp" alt="Decorative element 1" />
        </figure>
        <figure className="index-intro-doodle [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(40%, 0%) rotate(-15deg) scale(0.5, 0.5)" }}>
          <img src="/site-assets/df2ffb67dccc362b.webp" alt="Decorative element 2" />
        </figure>
        <figure className="index-intro-doodle [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(-40%, 0%) rotate(15deg) scale(0.5, 0.5)" }}>
          <img src="/site-assets/269ce707c3a455f3.webp" alt="Decorative element 3" />
        </figure>
        <figure className="index-intro-doodle [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "scale(0.5, 0.5)" }}>
          <img src="/site-assets/049a2bfd804fda5f.webp" alt="Decorative element 4" />
        </figure>
      </div>
    </section>
  );
}

const PRODUCT_STEPS = [
  { key: "one", bg: "rgb(247,117,0)", color: "#fff", accent: "#663000" },
  { key: "two", bg: "rgb(214,202,224)", color: "#590e23", accent: "#d6cae0" },
  { key: "three", bg: "rgb(226,248,108)", color: "#154347", accent: "#e2f86c" },
  { key: "four", bg: "rgb(201,225,238)", color: "#154347", accent: "#c9e1ee" },
];

function ImportedSection2() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const track = ref.current?.parentElement;
      if (!track) return;
      const r = track.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(0.999, Math.max(0, -r.top / span)) : 0;
      setStep(Math.floor(p * PRODUCT_STEPS.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  const s = PRODUCT_STEPS[step] ?? PRODUCT_STEPS[0]!;
  return (
    <section ref={ref} data-step={s.key} style={{ visibility: "inherit", "--bg": s.bg, "--color": s.color, "--nav": s.color, "--accent": s.accent } as CSSProperties} className="index-product place-content-center relative [background-color:var(--bg)] [min-height:100svh] [@media(max-width:759px)]:[width:100vw] [opacity:1]" id="index-product">
      <div className="index-product-feature items-center absolute capitalize [flex-shrink:0] [inset:0px] [letter-spacing:-0.168rem]">
        <div className="[grid-area:1/1]" data-one="">
          <span>Fund life-</span>
          <span>changing goals</span>
          <span>with Circles.</span>
        </div>
        <div className="[grid-area:1/1]" data-two="">
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>Build Wealth </span>
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>With Your Tribe</span>
        </div>
        <div className="[grid-area:1/1]" data-three="">
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>Save your way,</span>
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>with real</span>
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>options.</span>
        </div>
        <div className="[grid-area:1/1] [letter-spacing:-0.171rem]" data-four="">
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>Get custom </span>
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>portfolios. </span>
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}>Full-service wealth </span>
          <span className="[translate:none] [rotate:none] [scale:none] invisible [clip-path:inset(0%_0%_100%)]" style={{ opacity: "0", transform: "translate(0%, 100%)" }}> management. </span>
        </div>
      </div>
      <div className="index-product-media place-content-center absolute [inset:0px]">
        <div className="h-[64.923rem] w-[30rem] [grid-area:1/1] [overflow:hidden] [filter:brightness(1)]" data-one="">
          <img src="/site-assets/699b4555fc70811a.webp" alt="Circles feature" />
        </div>
        <div className="h-[64.923rem] w-[30rem] [grid-area:1/1] [overflow:hidden] [filter:brightness(1)]" data-two="">
          <img className="[translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_100%)]" style={{ transform: "translate(0%, 100%)" }} src="/site-assets/2b31bc8ea62df586.webp" alt="Tribe feature" />
        </div>
        <div className="h-[64.923rem] w-[30rem] [grid-area:1/1] [overflow:hidden] [filter:brightness(1)]" data-three="">
          <img className="[translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_100%)]" style={{ transform: "translate(0%, 100%)" }} src="/site-assets/4728db6d40fb1172.webp" alt="Savings feature" />
        </div>
        <div className="h-[64.923rem] w-[30rem] [grid-area:1/1] [overflow:hidden]" data-four="">
          <img className="[translate:none] [rotate:none] [scale:none] [clip-path:inset(0%_0%_100%)]" style={{ transform: "translate(0%, 100%)" }} src="/site-assets/b6c1f3c9f6a65cac.webp" alt="Investing feature" />
        </div>
      </div>
      <div className="index-product-details items-center justify-end absolute [inset:0px] [z-index:1]">
        <div className="[grid-area:1/1]" data-one="">
          <p className="self-stretch max-w-[45rem] text-right [color:var(--color)]"> Wealth creation starts with capital formation—Ajo, contribution, or circle — same powerful idea.<br /> People pool funds, one gets paid each cycle. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [cursor:pointer] [letter-spacing:0.014rem] [transition:padding_0.2s_ease-in-out] [width:fit-content]" href="/circles">Learn about Circles</a>
        </div>
        <div className="[grid-area:1/1] [filter:blur(0.4rem)] [opacity:0] invisible" data-two="">
          <p className="self-stretch max-w-[45rem] text-right [color:var(--color)]"> Create a community for friends, family, colleagues, or anyone with shared goals. Save together, contribute to ajo/esusu, split bills, and achieve more as a group, all in one place. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [cursor:pointer] [letter-spacing:0.014rem] [transition:padding_0.2s_ease-in-out] [width:fit-content]" href="/tribe">Learn about Tribe</a>
        </div>
        <div className="[grid-area:1/1] [filter:blur(0.4rem)] [opacity:0] invisible" data-three="">
          <p className="self-stretch max-w-[45rem] text-right [color:var(--color)]"> Build a safety net, save toward a big goal, or keep it flexible. Reserve, Goals, and Flex give you structure without making life harder. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [cursor:pointer] [letter-spacing:0.014rem] [transition:padding_0.2s_ease-in-out] [width:fit-content]" href="/savings">Learn about Savings</a>
        </div>
        <div className="[grid-area:1/1] [filter:blur(0.4rem)] [opacity:0] invisible" data-four="">
          <p className="self-stretch max-w-[45rem] text-right [color:var(--color)]"> Access expert-led investments with higher return potential than traditional savings. Low to medium risk, expertly managed—with real-time guidance from a dedicated wealth manager. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [cursor:pointer] [letter-spacing:0.014rem] [transition:padding_0.2s_ease-in-out] [width:fit-content]" href="/invest">Learn about Investing</a>
        </div>
      </div>
      <div className="index-product-nav items-end gap-[0.6rem] justify-start absolute [inset:0px]">
        <div className="items-center [grid-area:1/1]" data-one="">
          <span className="text-center [letter-spacing:0.015rem]">
            <i>01</i>
            <svg className="[stroke-width:3.5] [z-index:1]" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="[opacity:1] [visibility:inherit]" style={{ strokeDasharray: "0, 100px" } as CSSProperties} d="M6.11527 5.83135C2.72725 9.1327 1.37927 12.248 1.37501 16.9785C1.37288 19.3512 1.65908 20.7424 2.55964 22.9375C3.56406 25.3858 6.41372 28.5111 6.41372 28.5111C6.41372 28.5111 9.50682 30.9528 11.8391 31.7723C14.2615 32.6235 15.8026 32.8155 18.3614 32.6024C20.5724 32.4182 21.8469 32.0825 23.846 31.12C25.8532 30.1537 26.9174 29.3653 28.4413 27.7403C29.8295 26.26 30.4852 25.263 31.317 23.4119C32.1136 21.6391 32.4219 20.5424 32.6215 18.6091C32.8821 16.0833 32.7015 14.5584 31.908 12.1464C31.1414 9.81647 30.4123 8.53543 28.795 6.69137C27.1095 4.76942 25.8733 3.83913 23.5476 2.778C21.3425 1.77192 19.9225 1.45089 17.4996 1.38429C12.7284 1.25312 9.53375 2.50031 6.11527 5.83135Z" />
            </svg>
          </span>
          <p className="[color:var(--nav)] [letter-spacing:0.015rem] [width:5rem]">Circles</p>
        </div>
        <div className="items-center [grid-area:1/1]" data-two="">
          <span className="text-center [letter-spacing:0.015rem]">
            <i className="[opacity:0.3]">02</i>
            <svg className="[stroke-width:3.5] [z-index:1]" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="[opacity:1] [visibility:inherit]" style={{ strokeDasharray: "0, 100px" } as CSSProperties} d="M6.11527 5.83135C2.72725 9.1327 1.37927 12.248 1.37501 16.9785C1.37288 19.3512 1.65908 20.7424 2.55964 22.9375C3.56406 25.3858 6.41372 28.5111 6.41372 28.5111C6.41372 28.5111 9.50682 30.9528 11.8391 31.7723C14.2615 32.6235 15.8026 32.8155 18.3614 32.6024C20.5724 32.4182 21.8469 32.0825 23.846 31.12C25.8532 30.1537 26.9174 29.3653 28.4413 27.7403C29.8295 26.26 30.4852 25.263 31.317 23.4119C32.1136 21.6391 32.4219 20.5424 32.6215 18.6091C32.8821 16.0833 32.7015 14.5584 31.908 12.1464C31.1414 9.81647 30.4123 8.53543 28.795 6.69137C27.1095 4.76942 25.8733 3.83913 23.5476 2.778C21.3425 1.77192 19.9225 1.45089 17.4996 1.38429C12.7284 1.25312 9.53375 2.50031 6.11527 5.83135Z" />
            </svg>
          </span>
          <p className="[color:var(--nav)] [letter-spacing:0.015rem] [width:5rem]">Tribe</p>
        </div>
        <div className="items-center [grid-area:1/1]" data-three="">
          <span className="text-center [letter-spacing:0.015rem]">
            <i className="[opacity:0.3]">03</i>
            <svg className="[stroke-width:3.5] [z-index:1]" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="[opacity:1] [visibility:inherit]" style={{ strokeDasharray: "0, 100px" } as CSSProperties} d="M6.11527 5.83135C2.72725 9.1327 1.37927 12.248 1.37501 16.9785C1.37288 19.3512 1.65908 20.7424 2.55964 22.9375C3.56406 25.3858 6.41372 28.5111 6.41372 28.5111C6.41372 28.5111 9.50682 30.9528 11.8391 31.7723C14.2615 32.6235 15.8026 32.8155 18.3614 32.6024C20.5724 32.4182 21.8469 32.0825 23.846 31.12C25.8532 30.1537 26.9174 29.3653 28.4413 27.7403C29.8295 26.26 30.4852 25.263 31.317 23.4119C32.1136 21.6391 32.4219 20.5424 32.6215 18.6091C32.8821 16.0833 32.7015 14.5584 31.908 12.1464C31.1414 9.81647 30.4123 8.53543 28.795 6.69137C27.1095 4.76942 25.8733 3.83913 23.5476 2.778C21.3425 1.77192 19.9225 1.45089 17.4996 1.38429C12.7284 1.25312 9.53375 2.50031 6.11527 5.83135Z" />
            </svg>
          </span>
          <p className="[color:var(--nav)] [letter-spacing:0.015rem] [width:5rem]">Savings</p>
        </div>
        <div className="items-center [grid-area:1/1]" data-four="">
          <span className="text-center [letter-spacing:0.015rem]">
            <i className="[opacity:0.3]">04</i>
            <svg className="[stroke-width:3.5] [z-index:1]" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="[opacity:1] [visibility:inherit]" style={{ strokeDasharray: "0, 100px" } as CSSProperties} d="M6.11527 5.83135C2.72725 9.1327 1.37927 12.248 1.37501 16.9785C1.37288 19.3512 1.65908 20.7424 2.55964 22.9375C3.56406 25.3858 6.41372 28.5111 6.41372 28.5111C6.41372 28.5111 9.50682 30.9528 11.8391 31.7723C14.2615 32.6235 15.8026 32.8155 18.3614 32.6024C20.5724 32.4182 21.8469 32.0825 23.846 31.12C25.8532 30.1537 26.9174 29.3653 28.4413 27.7403C29.8295 26.26 30.4852 25.263 31.317 23.4119C32.1136 21.6391 32.4219 20.5424 32.6215 18.6091C32.8821 16.0833 32.7015 14.5584 31.908 12.1464C31.1414 9.81647 30.4123 8.53543 28.795 6.69137C27.1095 4.76942 25.8733 3.83913 23.5476 2.778C21.3425 1.77192 19.9225 1.45089 17.4996 1.38429C12.7284 1.25312 9.53375 2.50031 6.11527 5.83135Z" />
            </svg>
          </span>
          <p className="[color:var(--nav)] [letter-spacing:0.015rem] [width:5rem]">Investing</p>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionFundLifeChangingGoals() {
  return (
    <section className="index-features [@media(max-width:759px)]:relative [@media(max-width:759px)]:[width:100vw] [opacity:1]" style={{ visibility: "inherit" } as CSSProperties} id="index-features">
      <ul className="min-h-[max(80rem,100vh)] [height:auto] [overflow:hidden]">
        <li className="flex-col justify-end min-h-[max(80rem,100vh)] [background-color:rgb(247,117,0)] [flex-shrink:0] [grid-area:1/1] [height:auto]">
          <figure>
            <img src="/site-assets/699b4555fc70811a.webp" alt="Circles - Fund life-changing goals" />
          </figure>
          <h2 className="capitalize [color:var(--color)] [letter-spacing:-3%]">Fund life-changing goals with Circles.</h2>
          <p className="[color:var(--color)] [letter-spacing:0px]"> Wealth creation starts with capital formation—Ajo, contribution, or circle — same powerful idea. People pool funds, one gets paid each cycle. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [letter-spacing:0.014rem] [width:fit-content]" href="/circles">Learn about Circles</a>
        </li>
        <li className="flex-col justify-end min-h-[max(80rem,100vh)] [background-color:rgb(214,202,224)] [flex-shrink:0] [grid-area:1/1] [height:auto]">
          <figure>
            <img src="/site-assets/2b31bc8ea62df586.webp" alt="Tribe - Build Wealth With Your Tribe" />
          </figure>
          <h2 className="capitalize [color:var(--color)] [letter-spacing:-3%]">Build Wealth With Your Tribe</h2>
          <p className="[color:var(--color)] [letter-spacing:0px]"> Create a community for friends, family, colleagues, or anyone with shared goals. Save together, contribute to ajo/esusu, split bills, and achieve more as a group, all in one place. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [letter-spacing:0.014rem] [width:fit-content]" href="/tribe">Learn about Tribe</a>
        </li>
        <li className="flex-col justify-end min-h-[max(80rem,100vh)] [background-color:rgb(226,248,108)] [flex-shrink:0] [grid-area:1/1] [height:auto]">
          <figure>
            <img src="/site-assets/4728db6d40fb1172.webp" alt="Savings - Save your way" />
          </figure>
          <h2 className="capitalize [color:var(--color)] [letter-spacing:-3%]">Save your way, with real options.</h2>
          <p className="[color:var(--color)] [letter-spacing:0px]"> Build a safety net, save toward a big goal, or keep it flexible. Reserve, Goals, and Flex give you structure without making life harder. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [letter-spacing:0.014rem] [width:fit-content]" href="/savings">Learn about Savings</a>
        </li>
        <li className="flex-col justify-end min-h-[max(80rem,100vh)] [background-color:rgb(201,225,238)] [flex-shrink:0] [grid-area:1/1] [height:auto]">
          <figure>
            <img src="/site-assets/b6c1f3c9f6a65cac.webp" alt="Investing - Turn saving into long-term growth" />
          </figure>
          <h2 className="capitalize [color:var(--color)] [letter-spacing:-3%]"> Get custom portfolios. <br /> Full-service wealth management. </h2>
          <p className="[color:var(--color)] [letter-spacing:0px]"> Access expert-led investments with higher return potential than traditional savings. Low to medium risk, expertly managed—with real-time guidance from a dedicated wealth manager. </p>
          <a className="place-content-center no-underline [background-color:var(--color)] [letter-spacing:0.014rem] [width:fit-content]" href="/invest">Learn about Investing</a>
        </li>
      </ul>
    </section>
  );
}

function ImportedSectionRealImpactRealStories() {
  return (
    <section className="index-testimonials relative [@media(max-width:759px)]:[background-color:rgb(252,248,232)] [@media(max-width:759px)]:[width:100vw]">
      <div className="index-testimonials-head justify-between [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[gap:2rem]">
        <h2 className="relative capitalize [color:rgb(37,19,12)] [flex-shrink:0] [z-index:1]">Real Impact,<br />Real stories</h2>
        <p className="relative [color:rgb(37,19,12)] [z-index:1]">See how rank help users Every on-time contribution builds your credit history and supports your financial future.</p>
      </div>
      <ul className="index-testimonials-list place-content-center [max-width:100vw] [translate:none] [rotate:none] [scale:none]" style={{ transform: "translate(0px, 25vh)" }}>
        <div className="[cursor:grab]">
          <li className="active relative select-none" style={{ transform: "translateX(0px)" }}>
            <figure className="[overflow:visible]" style={{ transform: "translateY(-11.9948rem)" }}>
              <video className="[background-color:rgb(247,117,0)]" loop playsInline src="/__l5e/assets-v1/4980d314-9328-43f5-8fb8-ac8e29d03983/testimony_one.webm" poster="/site-assets/7b0f1d7e1377ca69.webp" preload="auto" />
              <div className="index-testimonials-cta items-center gap-[0.8rem] pointer-events-none absolute visible! [bottom:-4rem] [left:0px] [opacity:1]! [right:0px] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
              <div className="index-testimonials-fs items-center bottom-[2.4rem] gap-[0.8rem] pointer-events-none absolute [left:50%] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
            </figure>
          </li>
          <li className="relative select-none" style={{ transform: "translateX(0px)" }}>
            <figure className="[overflow:visible]" style={{ transform: "translateY(-9.2967rem)" }}>
              <video className="[background-color:rgb(247,117,0)]" loop playsInline src="/__l5e/assets-v1/6404a88b-557d-4a6c-add3-4884059a8485/testimony_two.webm" poster="/site-assets/c899bb373f3ae780.webp" preload="auto" />
              <div className="index-testimonials-cta items-center gap-[0.8rem] pointer-events-none absolute [bottom:-4rem] [left:0px] [opacity:0] [right:0px] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
              <div className="index-testimonials-fs items-center bottom-[2.4rem] gap-[0.8rem] pointer-events-none absolute [left:50%] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
            </figure>
          </li>
          <li className="relative select-none" style={{ transform: "translateX(0px)" }}>
            <figure className="[overflow:visible]" style={{ transform: "translateY(-1.38441rem)" }}>
              <video className="[background-color:rgb(247,117,0)]" loop playsInline src="/__l5e/assets-v1/4d4d2e85-ac5b-47eb-b04e-a0eda3660de9/testimony_three.webm" poster="/site-assets/db6151440dcd191e.webp" preload="auto" />
              <div className="index-testimonials-cta items-center gap-[0.8rem] pointer-events-none absolute [bottom:-4rem] [left:0px] [opacity:0] [right:0px] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
              <div className="index-testimonials-fs items-center bottom-[2.4rem] gap-[0.8rem] pointer-events-none absolute [left:50%] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
            </figure>
          </li>
          <li className="relative select-none" style={{ transform: "translateX(0px)" }}>
            <figure className="[overflow:visible]" style={{ transform: "translateY(9.80485rem)" }}>
              <video className="[background-color:rgb(247,117,0)]" loop playsInline src="/__l5e/assets-v1/4980d314-9328-43f5-8fb8-ac8e29d03983/testimony_one.webm" poster="/site-assets/7b0f1d7e1377ca69.webp" preload="auto" />
              <div className="index-testimonials-cta items-center gap-[0.8rem] pointer-events-none absolute [bottom:-4rem] [left:0px] [opacity:0] [right:0px] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
              <div className="index-testimonials-fs items-center bottom-[2.4rem] gap-[0.8rem] pointer-events-none absolute [left:50%] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
            </figure>
          </li>
          <li className="relative select-none" style={{ transform: "translateX(-2323.12px)" }}>
            <figure className="[overflow:visible]" style={{ transform: "translateY(-0.544493rem)" }}>
              <video className="[background-color:rgb(247,117,0)]" loop playsInline src="/__l5e/assets-v1/6404a88b-557d-4a6c-add3-4884059a8485/testimony_two.webm" poster="/site-assets/c899bb373f3ae780.webp" preload="auto" />
              <div className="index-testimonials-cta items-center gap-[0.8rem] pointer-events-none absolute [bottom:-4rem] [left:0px] [opacity:0] [right:0px] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
              <div className="index-testimonials-fs items-center bottom-[2.4rem] gap-[0.8rem] pointer-events-none absolute [left:50%] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
            </figure>
          </li>
          <li className="relative select-none" style={{ transform: "translateX(-2323.12px)" }}>
            <figure className="[overflow:visible]" style={{ transform: "translateY(-8.81816rem)" }}>
              <video className="[background-color:rgb(247,117,0)]" loop playsInline src="/__l5e/assets-v1/4d4d2e85-ac5b-47eb-b04e-a0eda3660de9/testimony_three.webm" poster="/site-assets/db6151440dcd191e.webp" preload="auto" />
              <div className="index-testimonials-cta items-center gap-[0.8rem] pointer-events-none absolute [bottom:-4rem] [left:0px] [opacity:0] [right:0px] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
              <div className="index-testimonials-fs items-center bottom-[2.4rem] gap-[0.8rem] pointer-events-none absolute [left:50%] [transition:opacity_0.3s] [width:fit-content] [z-index:3]">
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/ec8e6294de3fd750-6ee95ccc3a20ccaf83fd73eca438acf0.png" alt="Play" />
                </button>
                <button className="bg-transparent rounded-[50%] h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[filter:invert(1)] [grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/4e49d94585784c90-75c5e55d5bec4e83b66b313e6fa68771.png" alt="Mute" />
                </button>
                <button className="bg-transparent h-[2.8rem] place-items-center w-[2.8rem] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:0px] [pointer-events:all] [transition:transform_.2s_var(--ease-button)]">
                  <img className="[grid-area:1/1] [transition:transform_0.2s]" src="/site-assets/6934d30f63f51ae4-ce5a95352f9c2090a696d28079e5a248.png" alt="Fullscreen" />
                </button>
              </div>
            </figure>
          </li>
        </div>
      </ul>
      <div className="index-testimonials-controls items-center bottom-[2.4rem] gap-[1.6rem] absolute [left:0px] [right:0px] [width:fit-content]">
        <button className="items-center rounded-[4.8rem] gap-[0.8rem] [background-color:rgb(247,117,0)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:1rem] [transition:transform_.2s_var(--ease-button)]">
          <img className="[transition:transform_0.2s]" src="/site-assets/5fafbdc74e89f715-ea2f3c6e7d03bd6adfb1dbfba7087fdc.png" alt="Previous" />
        </button>
        <button className="items-center rounded-[4.8rem] gap-[0.8rem] [background-color:rgb(247,117,0)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:1rem] [transition:transform_.2s_var(--ease-button)]">
          <img className="[transition:transform_0.2s]" src="/site-assets/5fafbdc74e89f715-ea2f3c6e7d03bd6adfb1dbfba7087fdc.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}

function ImportedSectionHowWeKeepYour() {
  return (
    <section className="index-how flex-col justify-evenly [@media(max-width:759px)]:relative [@media(max-width:759px)]:[background-color:rgb(21,67,71)] [@media(max-width:759px)]:[gap:4rem] [@media(max-width:759px)]:[height:100vh] [@media(max-width:759px)]:[width:100vw] [opacity:1]" style={{ visibility: "inherit" } as CSSProperties}>
      <h2 className="index-how-heading max-w-[55.9rem] capitalize [opacity:0] invisible" style={{ color: "rgb(204, 204, 204)" }}>How we keep your money safe.</h2>
      <ul className="index-how-list justify-between [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:gap-[3.2rem] [@media(max-width:759px)]:min-h-[83rem] [@media(max-width:759px)]:[background-color:inherit] [@media(max-width:759px)]:[height:100vh]">
        <li className="[flex-shrink:0] [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:min-h-[83rem] [@media(max-width:759px)]:[flex-shrink:0] [@media(max-width:759px)]:[height:100vh] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 25%)" }}>
          <img className="[overflow:hidden] will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/167cf65ef55da033.webp" alt="Regulated and trusted" />
          <div>
            <h3 className="[color:rgb(255,255,255)] [@media(max-width:759px)]:[background-color:rgb(21,67,71)]">Regulated and trusted</h3>
            <p className="self-stretch [color:rgb(255,255,255)] [max-width:36rem] [@media(max-width:759px)]:[background-color:rgb(21,67,71)]">Built on licensed, regulated financial infrastructure you can trust.</p>
          </div>
        </li>
        <li className="[flex-shrink:0] [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:min-h-[83rem] [@media(max-width:759px)]:[flex-shrink:0] [@media(max-width:759px)]:[height:100vh] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 25%)" }}>
          <img className="[overflow:hidden] will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/0e5d75716fcff601.webp" alt="Protection for every Circle" />
          <div>
            <h3 className="[color:rgb(255,255,255)] [@media(max-width:759px)]:[background-color:rgb(21,67,71)]">Protection for every Circle</h3>
            <p className="self-stretch [color:rgb(255,255,255)] [max-width:36rem] [@media(max-width:759px)]:[background-color:rgb(21,67,71)]">Clear agreements and secure records help protect every Circle and every member.</p>
          </div>
        </li>
        <li className="[flex-shrink:0] [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:min-h-[83rem] [@media(max-width:759px)]:[flex-shrink:0] [@media(max-width:759px)]:[height:100vh] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 25%)" }}>
          <img className="[overflow:hidden] will-change-transform" style={{ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)" }} src="/site-assets/7b2dbec2d5e58078.webp" alt="More than a contribution" />
          <div>
            <h3 className="[color:rgb(255,255,255)] [@media(max-width:759px)]:[background-color:rgb(21,67,71)]">More than a contribution</h3>
            <p className="self-stretch [color:rgb(255,255,255)] [max-width:36rem] [@media(max-width:759px)]:[background-color:rgb(21,67,71)]">Every on-time contribution builds your credit history and supports your financial future.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

function ImportedSectionTheRankDifference() {
  return (
    <section className="index-difference h-[75svh] relative [@media(max-width:759px)]:[width:100vw] [opacity:1]" style={{ visibility: "inherit" } as CSSProperties}>
      <figure className="index-difference-bg">
        <img className="[object-position:50%_150%] invisible" style={{ opacity: "0" }} src="/site-assets/12f816b37446a56d.webp" alt="Rank difference" />
      </figure>
      <div className="index-difference-content items-center justify-between relative [height:100%] [z-index:1]">
        <h2 className="capitalize w-[34.6rem] [color:rgb(255,255,255)]">The Rank Difference</h2>
        <ul className="flex-col w-[44rem] [gap:1.5rem]">
          <li className="items-start self-stretch flex-col gap-[2.4rem] [backdrop-filter:blur(1.4rem)] [background-color:rgb(252,248,232)] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>
            <h3 className="[color:rgb(38,18,10)]">Empathy</h3>
            <p className="[color:rgb(38,18,10)]"> We get it. We know how it feels building new wealth. Rank is built intentionally for New Money — entrepreneurs and professionals growing lasting wealth. </p>
          </li>
          <li className="items-start self-stretch flex-col gap-[2.4rem] [backdrop-filter:blur(1.4rem)] [background-color:rgb(252,248,232)] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>
            <h3 className="[color:rgb(38,18,10)]">Journey</h3>
            <p className="[color:rgb(38,18,10)]"> Clarity on your journey. As your needs evolve, we support you through every stage — from early savings to serious investments and beyond. </p>
          </li>
          <li className="items-start self-stretch flex-col gap-[2.4rem] [backdrop-filter:blur(1.4rem)] [background-color:rgb(252,248,232)] [translate:none] [rotate:none] [scale:none] [opacity:0] invisible" style={{ transform: "translate(0%, 100%)" }}>
            <h3 className="[color:rgb(38,18,10)]">Guidance</h3>
            <p className="[color:rgb(38,18,10)]"> Expert Guidance. Investments and savings built by real financial experts. Clear, jargon-free insights with human support that celebrate your progress. </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ImportedSectionMoneypedia() {
  return (
    <section className="index-moneypedia relative [@media(max-width:759px)]:[width:100vw] [opacity:1] [translate:none] [rotate:none] [scale:none]" style={{ visibility: "inherit", transform: "translate(0px, 25vh)" } as CSSProperties}>
      <div className="index-moneypedia-head flex-col">
        <h2 className="capitalize [color:rgb(37,19,12)]">Moneypedia</h2>
        <a className="items-center gap-[0.8rem] justify-center no-underline whitespace-pre [background-color:rgb(255,228,204)] [height:fit-content] [letter-spacing:0.014rem] [transition:padding_0.2s_ease-in-out] [width:fit-content]" href="https://blog.userank.com/" target="_blank"> See more resources <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1287 8.24773L8.1057 4.22472L9.16635 3.16406L15 8.99773L9.16635 14.8313L8.1057 13.7707L12.1287 9.74773H3V8.24773H12.1287Z" fill="#663000" /></svg></a>
      </div>
      <ul className="index-moneypedia-list place-content-center pointer-events-none [inset:0px] [max-width:100vw] [overflow:clip]">
        <div className="[@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[gap:2rem] [cursor:grab]">
          <a className="active left-[170rem] pointer-events-auto no-underline select-none [cursor:pointer] [height:auto] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(0px)" }} href="https://blog.userank.com/featured/moni-is-now-rank/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1.25971)" }}>
              <img src="/site-assets/f69d0c8d0a9adf40.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">Moni is now Rank</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />Nov 17, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(0px)" }} href="https://blog.userank.com/pf/the-types-of-savings-everyone-should-have/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1.10681)" }}>
              <img src="/site-assets/02eea04c64e9ccf1.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">The 6 Types of Savings Everyone Should Have</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />May 27, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(0px)" }} href="https://blog.userank.com/investing/what-is-an-inflation-hedge/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1)" }}>
              <img src="/site-assets/f88162c05ed26088.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">What is an Inflation Hedge? Meaning, Examples and Smart Options</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />Jan 30, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(0px)" }} href="https://blog.userank.com/lifestyle/the-cost-of-bridal-train-in-nigeria/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1)" }}>
              <img src="/site-assets/ae9fc20ac6b24f5f.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">The Cost of being on a bridal train in Nigeria</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />Feb 24, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(0px)" }} href="https://blog.userank.com/featured/moni-is-now-rank/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1)" }}>
              <img src="/site-assets/f69d0c8d0a9adf40.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">Moni is now Rank</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />Nov 17, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(-4138.62px)" }} href="https://blog.userank.com/pf/the-types-of-savings-everyone-should-have/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1)" }}>
              <img src="/site-assets/02eea04c64e9ccf1.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">The 6 Types of Savings Everyone Should Have</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />May 27, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(-4138.62px)" }} href="https://blog.userank.com/investing/what-is-an-inflation-hedge/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1)" }}>
              <img src="/site-assets/f88162c05ed26088.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">What is an Inflation Hedge? Meaning, Examples and Smart Options</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />Jan 30, 2025</h4>
          </a>
          <a className="left-[170rem] no-underline select-none [height:auto] [@media(max-width:759px)]:pointer-events-auto [@media(max-width:759px)]:[cursor:pointer] [@media(max-width:759px)]:[height:auto]" style={{ transform: "translateX(-4138.62px)" }} href="https://blog.userank.com/lifestyle/the-cost-of-bridal-train-in-nigeria/" target="_blank">
            <figure className="[overflow:hidden]" style={{ transform: "scale(1.0797)" }}>
              <img src="/site-assets/ae9fc20ac6b24f5f.webp" alt="Moneypedia article" />
              <button className="items-center rounded-[1.6rem] bottom-[0.8rem] gap-[0.8rem] justify-center absolute right-[0.8rem] [background-color:rgb(255,228,204)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [color:rgb(102,48,0)] [cursor:pointer] [letter-spacing:0.014rem] [line-height:2rem] [padding:1.2rem_2rem] [transition:all_.5s_var(--ease-button)]">Read more</button>
            </figure>
            <h3 className="[color:rgb(112,45,0)] [letter-spacing:-0.018rem] [transition:opacity_0.5s]">The Cost of being on a bridal train in Nigeria</h3>
            <h4 className="items-center gap-[0.8rem] text-center uppercase [color:rgb(122,122,122)] [letter-spacing:0.042rem] [transition:opacity_0.5s] [width:fit-content]">Company <i className="h-[0.4rem] w-[0.4rem] [background-color:rgba(112,45,0,0.5)]" />Feb 24, 2025</h4>
          </a>
        </div>
      </ul>
      <div className="index-moneypedia-controls items-center bottom-[calc(2.4rem_-_25vh)] gap-[1.6rem] absolute [left:0px] [right:0px] [width:fit-content]">
        <button className="items-center rounded-[4.8rem] gap-[0.8rem] [background-color:rgb(247,117,0)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:1rem] [transition:transform_.2s_var(--ease-button)]">
          <img className="[transition:transform_0.2s]" src="/site-assets/5fafbdc74e89f715-ea2f3c6e7d03bd6adfb1dbfba7087fdc.png" alt="Previous" />
        </button>
        <button className="items-center rounded-[4.8rem] gap-[0.8rem] [background-color:rgb(247,117,0)] [border-color:currentcolor] [border-image:none] [border-style:none] [border-width:medium] [cursor:pointer] [padding:1rem] [transition:transform_.2s_var(--ease-button)]">
          <img className="[transition:transform_0.2s]" src="/site-assets/5fafbdc74e89f715-ea2f3c6e7d03bd6adfb1dbfba7087fdc.png" alt="Next" />
        </button>
      </div>
    </section>
  );
}

function ImportedSectionHearDirectlyFromOur() {
  return (
    <section className="index-investors items-center justify-between relative [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[background-color:rgb(89,14,35)] [@media(max-width:759px)]:[width:100vw]">
      <h2 className="capitalize [color:rgb(214,202,224)] [flex-shrink:0]">Hear Directly from Our Investors</h2>
      <ul className="gap-[1.2rem] [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:w-[36.1rem]">
        <li className="active items-start self-stretch gap-[1.8rem] [background-color:var(--bg)] [overflow:hidden] [transition:width_0.5s] [@media(max-width:759px)]:flex-col [translate:none] [rotate:none] [scale:none]" style={{ "--bg": "#e2f86c", transform: "translate(50vw, 0px)" } as CSSProperties}>
          <figure className="[flex-shrink:0] [@media(max-width:759px)]:[overflow:hidden]">
            <img className="[@media(max-width:759px)]:[object-position:50%_12.5%]" src="/site-assets/dda2e9a3a804c9fa.webp" alt="Investor testimonial" />
            <img className="bottom-[1.6rem] absolute [z-index:1] [@media(max-width:759px)]:left-[-0.4rem] [@media(max-width:759px)]:[object-position:50%_12.5%]" src="/site-assets/475131cfb7896467-125af111110c19f1c07f26611bab31fd.png" alt="Investor icon" />
          </figure>
          <div className="flex-col [height:100%]">
            <p className="[color:rgb(21,67,71)]"> “MAGIC is delighted to back Rank as they reimagine wealth building across Africa. Their approach of combining investment opportunities with the strength of community trust is both differentiated and powerful. We're confident the team will build the financial infrastructure that enables more Africans to invest, grow wealth, and achieve long-term financial security.“ </p>
            <h3 className="[color:rgb(21,67,71)] [letter-spacing:-0.016rem]">Temi Marcella</h3>
          </div>
        </li>
        <li className="items-start self-stretch gap-[1.8rem] [background-color:var(--bg)] [overflow:hidden] [transition:width_0.5s] [@media(max-width:759px)]:flex-col [translate:none] [rotate:none] [scale:none]" style={{ "--bg": "#c9e1ee", transform: "translate(50vw, 0px)" } as CSSProperties}>
          <figure className="[flex-shrink:0] [@media(max-width:759px)]:[overflow:hidden]">
            <img className="[@media(max-width:759px)]:[object-position:50%_3.5%]" src="/site-assets/5b4fd6285a928285.webp" alt="Investor testimonial" />
            <img className="bottom-[1.6rem] absolute [z-index:1] [@media(max-width:759px)]:left-[-0.4rem] [@media(max-width:759px)]:[object-position:50%_3.5%]" src="/site-assets/fba7a96aa78e1b54-8554c4acf067127eb2951d8d091687fc.png" alt="Investor icon" />
          </figure>
          <div className="flex-col [height:100%]">
            <p className="[color:rgb(21,67,71)]"> “The opportunity Rank is pursuing is both ambitious and timely. Few teams are thinking as deeply about how wealth, investments, and community can work together to create lasting prosperity in emerging markets. From our earliest conversations with Femi and Dapo, it was clear they possessed the vision, expertise, and execution capability required to build a category-defining company. We believe Rank has the potential to become one of Africa’s most influential wealth platforms.“ </p>
            <h3 className="[color:rgb(21,67,71)] [letter-spacing:-0.016rem]">Olumide Soyombo</h3>
          </div>
        </li>
        <li className="items-start self-stretch gap-[1.8rem] [background-color:var(--bg)] [overflow:hidden] [transition:width_0.5s] [@media(max-width:759px)]:flex-col [translate:none] [rotate:none] [scale:none]" style={{ "--bg": "#d6cae0", transform: "translate(50vw, 0px)" } as CSSProperties}>
          <figure className="[flex-shrink:0] [@media(max-width:759px)]:[overflow:hidden]">
            <img className="[@media(max-width:759px)]:[object-position:50%_0px]" src="/site-assets/209d883d3d23651b.webp" alt="Investor testimonial" />
            <img className="bottom-[1.6rem] absolute [z-index:1] [@media(max-width:759px)]:left-[-0.4rem] [@media(max-width:759px)]:[object-position:50%_0px]" src="/site-assets/c4f93de0cfdbe08e-11693a9acc9e291e0290e09f28aa512b.png" alt="Investor icon" />
          </figure>
          <div className="flex-col [height:100%]">
            <p className="[color:rgb(21,67,71)]"> “Rank is addressing one of the most compelling wealth creation opportunities in Africa by combining investment expertise, disciplined portfolio management, and the power of trusted communities. We believe there is significant potential to help individuals, families, and businesses preserve and grow wealth across generations. The team at Rank is uniquely positioned to democratize access to sophisticated wealth solutions and create a more prosperous Africa.“ </p>
            <h3 className="[color:rgb(21,67,71)] [letter-spacing:-0.016rem]">Kola Aina</h3>
          </div>
        </li>
      </ul>
    </section>
  );
}

function ImportedFooterWebsiteFooter() {
  return (
    <footer className="footer flex-col relative [background-color:rgb(34,9,0)] [contain:paint] [gap:8rem] [width:100vw] [z-index:10] [@media(max-width:759px)]:[contain:paint] [@media(max-width:759px)]:[height:auto] [@media(max-width:759px)]:[width:100vw]" style={{ display: "flex" }} role="contentinfo" aria-label="Website footer">
      <section className="footer-faq justify-between [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[gap:8rem]" aria-labelledby="faq-heading">
        <h2 className="max-w-[44rem] capitalize [color:rgb(252,248,232)]" id="faq-heading">Frequently asked Questions</h2>
        <ul className="flex-col">
          <li className="active self-stretch flex-col justify-between max-w-[78.5rem] relative [background-color:rgb(251,244,162)] [color:rgb(38,18,10)] [cursor:pointer] [transition:0.35s_ease-in-out]" role="presentation">
            <h3 className="[color:inherit] [@media(max-width:759px)]:[max-width:28rem]">How does Rank work?</h3>
            <div className="grid-rows-[1fr] [overflow:hidden] [transition:0.35s_ease-in-out]">
              <p className="[color:rgb(38,18,10)] [opacity:1] [overflow:hidden] [transition:0.35s_ease-in-out]"> Rank gives you simple ways to save, access funds, and grow your money, through Savings, Circles, Tribe, and Investments, all in one place. </p>
            </div>
            <span aria-hidden="true">
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/d8963501ba3717ec-18dc372f48fbf9be85b35e858dc5073d.png" alt="Expand" />
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/190bb5bda10d80e1-c6e7f1e6e0fc21d8f322c3106151ca5e.png" alt="Collapse" />
            </span>
          </li>
          <li className="self-stretch flex-col justify-between max-w-[78.5rem] relative [background-color:rgba(255,255,255,0.07)] [color:rgb(252,248,232)] [cursor:pointer] [transition:0.35s_ease-in-out]" role="presentation">
            <h3 className="[color:inherit] [@media(max-width:759px)]:[max-width:28rem]">What is Circles?</h3>
            <div className="grid-rows-[0fr] [overflow:hidden] [transition:0.35s_ease-in-out]">
              <p className="[color:rgb(38,18,10)] [opacity:0] [overflow:hidden] [transition:0.35s_ease-in-out]"> A modern, safer version of Ajo. Join a circle, and receive a lump sum when your slot comes. Rank guarantees your payout even if someone else in. The circle defaults. No debt, no loan apps, no stress. It is public Ajo open to everyone. </p>
            </div>
            <span aria-hidden="true">
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/d8963501ba3717ec-18dc372f48fbf9be85b35e858dc5073d.png" alt="Expand" />
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/190bb5bda10d80e1-c6e7f1e6e0fc21d8f322c3106151ca5e.png" alt="Collapse" />
            </span>
          </li>
          <li className="self-stretch flex-col justify-between max-w-[78.5rem] relative [background-color:rgba(255,255,255,0.07)] [color:rgb(252,248,232)] [cursor:pointer] [transition:0.35s_ease-in-out]" role="presentation">
            <h3 className="[color:inherit] [@media(max-width:759px)]:[max-width:28rem]">What is Tribe?</h3>
            <div className="grid-rows-[0fr] [overflow:hidden] [transition:0.35s_ease-in-out]">
              <p className="[color:rgb(38,18,10)] [opacity:0] [overflow:hidden] [transition:0.35s_ease-in-out]"> Tribe lets you save and grow money with people you trust. It’s a shared system that helps you stay consistent and reach your goals faster. </p>
            </div>
            <span aria-hidden="true">
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/d8963501ba3717ec-18dc372f48fbf9be85b35e858dc5073d.png" alt="Expand" />
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/190bb5bda10d80e1-c6e7f1e6e0fc21d8f322c3106151ca5e.png" alt="Collapse" />
            </span>
          </li>
          <li className="self-stretch flex-col justify-between max-w-[78.5rem] relative [background-color:rgba(255,255,255,0.07)] [color:rgb(252,248,232)] [cursor:pointer] [transition:0.35s_ease-in-out]" role="presentation">
            <h3 className="[color:inherit] [@media(max-width:759px)]:[max-width:28rem]">How does Rank Savings work?</h3>
            <div className="grid-rows-[0fr] [overflow:hidden] [transition:0.35s_ease-in-out]">
              <p className="[color:rgb(38,18,10)] [opacity:0] [overflow:hidden] [transition:0.35s_ease-in-out]"> You choose a savings plan, set your amount, and save at your own pace while your money grows over time. </p>
            </div>
            <span aria-hidden="true">
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/d8963501ba3717ec-18dc372f48fbf9be85b35e858dc5073d.png" alt="Expand" />
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/190bb5bda10d80e1-c6e7f1e6e0fc21d8f322c3106151ca5e.png" alt="Collapse" />
            </span>
          </li>
          <li className="self-stretch flex-col justify-between max-w-[78.5rem] relative [background-color:rgba(255,255,255,0.07)] [color:rgb(252,248,232)] [cursor:pointer] [transition:0.35s_ease-in-out]" role="presentation">
            <h3 className="[color:inherit] [@media(max-width:759px)]:[max-width:28rem]">Do I need experience to start investing?</h3>
            <div className="grid-rows-[0fr] [overflow:hidden] [transition:0.35s_ease-in-out]">
              <p className="[color:rgb(38,18,10)] [opacity:0] [overflow:hidden] [transition:0.35s_ease-in-out]"> No. With Rank Wealth Managers, you get expert guidance to help you invest based on your goals and risk level. </p>
            </div>
            <span aria-hidden="true">
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/d8963501ba3717ec-18dc372f48fbf9be85b35e858dc5073d.png" alt="Expand" />
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/190bb5bda10d80e1-c6e7f1e6e0fc21d8f322c3106151ca5e.png" alt="Collapse" />
            </span>
          </li>
          <li className="self-stretch flex-col justify-between max-w-[78.5rem] relative [background-color:rgba(255,255,255,0.07)] [color:rgb(252,248,232)] [cursor:pointer] [transition:0.35s_ease-in-out]" role="presentation">
            <h3 className="[color:inherit] [@media(max-width:759px)]:[max-width:28rem]">Is my money safe with Rank?</h3>
            <div className="grid-rows-[0fr] [overflow:hidden] [transition:0.35s_ease-in-out]">
              <p className="[color:rgb(38,18,10)] [opacity:0] [overflow:hidden] [transition:0.35s_ease-in-out]"> Yes. Your funds are protected with bank-grade security, held with licensed custodians, and never mixed with Rank's own money. </p>
            </div>
            <span aria-hidden="true">
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/d8963501ba3717ec-18dc372f48fbf9be85b35e858dc5073d.png" alt="Expand" />
              <img className="absolute [inset:0px] [transition:0.35s_ease-in-out]" src="/site-assets/190bb5bda10d80e1-c6e7f1e6e0fc21d8f322c3106151ca5e.png" alt="Collapse" />
            </span>
          </li>
        </ul>
      </section>
      <section className="footer-cta flex-col justify-center relative" aria-labelledby="cta-heading">
        <figure className="footer-cta-bg [overflow:hidden]">
          <img className="[object-position:37.4%_50%]" src="/site-assets/26b7284befd0f61e.webp" alt="Background illustration" />
        </figure>
        <h2 className="relative text-center [color:rgb(255,255,255)] [letter-spacing:-0.256rem]" id="cta-heading"> Join the new money club with Rank </h2>
        <p className="relative text-center [color:rgb(255,255,255)]"> Join a Circle, build a Tribe, save with discipline, and invest for the long term, all in one place. </p>
        <a className="footer-cta-cta items-center relative no-underline w-[33.8rem] [background:var(--Colors-Orange,color(display-p3_.9686_.4588_0))] [cursor:pointer] [gap:1rem] [overflow:hidden]" aria-label="Download Rank app from App Store or Google Play" href="https://onelink.to/wqs6kf" rel="noopener noreferrer" target="_blank">
          <i className="whitespace-pre [color:rgb(255,255,255)] [letter-spacing:0.016rem]">Download app</i>
          <img src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" />
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="or" />
          <img src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" />
          <img src="/site-assets/f4a005efd815f969.png" alt="Scan QR code to download" />
          <i className="whitespace-pre [color:rgb(255,255,255)] [letter-spacing:0.016rem]">Download app</i>
          <img src="/site-assets/8504f806d5a1bf30-d05d80b90b3364a7b78e1c3a1ea6b95b.png" alt="Download on App Store" />
          <img src="/site-assets/b1e05c18dab0a46e-271d872009b7cfbbba6d2fa86657096f.png" alt="or" />
          <img src="/site-assets/04efde7523e7c57a.png" alt="Get it on Google Play" />
        </a>
      </section>
      <section className="footer-footer [@media(max-width:759px)]:flex-col [@media(max-width:759px)]:[width:100%]" aria-labelledby="footer-main-heading">
        <h2 className="visually-hidden whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden]" id="footer-main-heading"> Footer navigation and company information </h2>
        <div className="footer-footer-left">
          <img className="[object-position:0px_50%]" src="/site-assets/4d6033883acb8ba1-03b48f86960bcb9d89f715de08f626cb.png" alt="Rank - Financial wellness platform" />
          <p className="max-w-[55.5rem] [color:rgb(255,255,255)]"> The Rank name and logos are trademarks and service marks (collectively, the "Rank Trademarks") owned by Rank Capital, Inc. You do not acquire a license or any ownership rights to any trademarks, service marks, or trade names through your access or use of the Rank app or platform product or service. </p>
          <div className="footer-footer-rcl items-center gap-[1.2rem]">
            <figure className="[flex-shrink:0]">
              <img className="[object-position:0px_50%]" src="/site-assets/c591f4e6e477695f.png" alt="" />
            </figure>
            <div className="flex-col gap-[0.7rem] [color:rgba(255,255,255,0.5)]">
              <span className="gap-[0.6rem]">
                <i className="[@media(max-width:759px)]:invisible! [@media(max-width:759px)]:[opacity:0]!" data-desktop="">Rank Microfinance Bank is licensed by CBN</i>
                <i className="[@media(min-width:760px)]:invisible! [@media(min-width:760px)]:[opacity:0]!" data-mobile="">Licensed by CBN</i>
                <img className="[object-position:0px_50%]" src="/site-assets/4e1aa712e83a3943-948b9543803f5b1408a2609656aa3044.png" alt="" />
              </span>
              <span className="gap-[0.6rem]"> Insured by <img className="[object-position:0px_50%]" src="/site-assets/1a1f66afd875f6a8.png" alt="" /></span>
            </div>
          </div>
          <img src="/site-assets/f4a005efd815f969.png" alt="Rank QR code" />
        </div>
        <div className="footer-footer-right flex-col [gap:8rem]">
          <nav aria-label="Footer navigation">
            <ul className="flex-1" role="list">
              <li className="flex-col gap-[0.8rem]">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Products</h3>
                <a className="no-underline" href="/circles">Circles</a>
                <a className="no-underline" href="/tribe">Tribe</a>
                <a className="no-underline" href="/savings-cc1249622f1249e7">Savings</a>
                <a className="no-underline" href="/invest-5c9c6cce026f6b1d">Invest</a>
              </li>
              <li className="flex-col gap-[0.8rem]">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Community</h3>
                <a className="no-underline" href="/community">Rank Community</a>
                <a className="no-underline" href="/campus-ambassador">Student Ambassador</a>
                <a className="no-underline" href="/community-activation">Community Activation</a>
                <a className="no-underline" href="/referral">Refer and Earn</a>
              </li>
              <li className="flex-col gap-[0.8rem]">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Company</h3>
                <a className="no-underline" aria-current="page" href="/">About Us</a>
                <a className="no-underline" href="/careers">Career</a>
              </li>
              <li className="flex-col gap-[0.8rem] [@media(max-width:759px)]:[order:1] [@media(min-width:760px)]:invisible! [@media(min-width:760px)]:[opacity:0]!" data-mobile="">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Nigeria</h3>
                <address>11b Ologun Agbaje, VI, Lagos, Nigeria</address>
              </li>
              <li className="flex-col gap-[0.8rem] [@media(max-width:759px)]:[order:1] [@media(min-width:760px)]:invisible! [@media(min-width:760px)]:[opacity:0]!" data-mobile="">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">United States</h3>
                <address> San Francisco 548 Market St, San Francisco, California, 94104-5401 </address>
              </li>
              <li className="flex-col gap-[0.8rem] [@media(min-width:760px)]:invisible! [@media(min-width:760px)]:[opacity:0]!" data-mobile="">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Contact</h3>
                <a className="[text-decoration:underline_0.02em] [text-underline-offset:0.225em]" href="mailto:hello@userank.com" rel="noopener noreferrer" title="Send email to Rank support"> hello@userank.com </a>
                <a className="[text-decoration:underline_0.02em] [text-underline-offset:0.225em]" href="tel:02012297000" rel="noopener noreferrer" title="Call Rank customer support">02012297000</a>
                <aside className="[width:100%] [@media(max-width:759px)]:flex-wrap [@media(max-width:759px)]:[gap:1.2rem_2.4rem]" aria-label="Social media links">
                  <a className="no-underline" aria-label="Follow Rank on Instagram" href="https://www.instagram.com/rankapp_/" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/ef7d75f8414c2ce2-58fbcf37816247e5726400ce9755d9a4.png" alt="Instagram" />
                  </a>
                  <a className="no-underline" aria-label="Follow Rank on X (Twitter)" href="https://x.com/rankapp__" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/68a6b226b8abba73-4e8cc074d7db6b92600fe80d46298494.png" alt="X (Twitter)" />
                  </a>
                  <a className="no-underline" aria-label="Watch Rank on YouTube" href="https://www.youtube.com/@rank_app" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/56820fda0fc60504-7623343e01a9cea3dd1f95a12e306381.png" alt="YouTube" />
                  </a>
                  <a className="no-underline" aria-label="Follow Rank on TikTok" href="https://www.tiktok.com/@rankapp_" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/e65c9bff99f499d1-f56542b3cc9ff53b2ad98e97b56fbe79.png" alt="TikTok" />
                  </a>
                  <a className="no-underline" aria-label="Follow Rank on Facebook" href="https://www.facebook.com/myrankapp" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/d6c4e05eb31b7f6d-d68c9dde4583f662d0436ad07c7e6dbb.png" alt="Facebook" />
                  </a>
                </aside>
              </li>
            </ul>
            <ul className="flex-1 [@media(max-width:759px)]:invisible! [@media(max-width:759px)]:[opacity:0]!" role="list" data-desktop="">
              <li className="flex-col gap-[0.8rem]">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Nigeria</h3>
                <address>11b Ologun Agbaje, VI, Lagos, Nigeria</address>
              </li>
              <li className="flex-col gap-[0.8rem]">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">United States</h3>
                <address> San Francisco 548 Market St, San Francisco, California, 94104-5401 </address>
              </li>
              <li className="flex-col gap-[0.8rem]">
                <h3 className="self-stretch [color:rgb(255,255,255)] [opacity:0.7]">Contact</h3>
                <a className="[text-decoration:underline_0.02em] [text-underline-offset:0.225em]" href="mailto:hello@userank.com" rel="noopener noreferrer" title="Send email to Rank support"> hello@userank.com </a>
                <a className="[text-decoration:underline_0.02em] [text-underline-offset:0.225em]" href="tel:02012297000" rel="noopener noreferrer" title="Call Rank customer support">02012297000</a>
                <aside className="[width:100%] [@media(max-width:759px)]:flex-wrap [@media(max-width:759px)]:[gap:1.2rem_2.4rem]" aria-label="Social media links">
                  <a className="no-underline" aria-label="Follow Rank on Instagram" href="https://www.instagram.com/rankapp_/" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/ef7d75f8414c2ce2-58fbcf37816247e5726400ce9755d9a4.png" alt="Instagram" />
                  </a>
                  <a className="no-underline" aria-label="Follow Rank on X (Twitter)" href="https://x.com/rankapp__" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/68a6b226b8abba73-4e8cc074d7db6b92600fe80d46298494.png" alt="X (Twitter)" />
                  </a>
                  <a className="no-underline" aria-label="Watch Rank on YouTube" href="https://www.youtube.com/@rank_app" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/56820fda0fc60504-7623343e01a9cea3dd1f95a12e306381.png" alt="YouTube" />
                  </a>
                  <a className="no-underline" aria-label="Follow Rank on TikTok" href="https://www.tiktok.com/@rankapp_" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/e65c9bff99f499d1-f56542b3cc9ff53b2ad98e97b56fbe79.png" alt="TikTok" />
                  </a>
                  <a className="no-underline" aria-label="Follow Rank on Facebook" href="https://www.facebook.com/myrankapp" rel="noopener noreferrer" target="_blank">
                    <img className="[transition:opacity_0.2s_ease-in-out]" src="/site-assets/d6c4e05eb31b7f6d-d68c9dde4583f662d0436ad07c7e6dbb.png" alt="Facebook" />
                  </a>
                </aside>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const loopingVideos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[loop]:not([autoplay]):not([controls])"),
    )
      .filter((video) => video.muted && !video.closest("[data-site-import-carousel-store]"))
      .slice(0, 32);
    const videoObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      }
    });
    loopingVideos.forEach((video) => videoObserver.observe(video));
    return () => {
      videoObserver.disconnect();
      loopingVideos.forEach((video) => video.pause());
    };
  }, []);
}
