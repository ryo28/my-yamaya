import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "./NavMenu";
export function MainContent() {
  return (
    <main>
  <NavMenu />
      <section>
        <div className="relative pt-36">
          <Image
            className="left-[calc(50%-70px)]    absolute top-20 z-10"
            src="	https://yu-san-chae.com/wp-content/themes/yusanchae/img/top/fv_heading_sp.svg"
            width={140}
            height={50}
            alt="imi"
          />
          <Image
            className="left-0 relative z-0 top-6"
            src="/bg-misosiru.jpg"
            width={550}
            height={50}
            alt="imi"
          />
          <div className="z-20 left-[calc(50%-153px)] absolute bottom-6 py-5 px-3 bg-white text-sm rounded-xl">
            <span className="text-green-800">定期便&nbsp;</span>
            <small>(毎月お届け便)</small>を契約済みの方はこちら
            <span>&emsp;⇨</span>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-serif p-10 leading-10">
          はじめまして、
          <br />
          ユサンチェです。
        </h3>

        <Image
          className="m-auto"
          src="/yusanche.jpg"
          width={400}
          height={230}
          alt="ユサンチェ"
        />

        <p className="font-serif leading-10 pl-10">
          サラダでも、漬物でもない。 <br />
          新しい野菜と果物の楽しみ方。
          <br />
          九州産をはじめとした旬の素材に、
          <br />
          乳酸菌を組み合わせて生まれた食品ブランド、
          <br />
          それが「ユサンチェ = 乳酸菜」です。
          <br />
        </p>
        <div className="py-12 pl-10">
          <Link
            href="/pages/yusanche"
            className="py-4 px-4 rounded-xl border-solid border-[1px] text-xs tracking-widest"
          >
            ユサンチェの特長を見る&emsp;⇨
          </Link>
        </div>
      </section>

      <section>
        <div className="relative py-12">
          <Image
            className="absolute top-0 left-10"
            src="/concept1.jpg"
            width={137}
            height={180}
            alt="egg"
          />
          <Image
            className="absolute left-1/2   top-56"
            src="/concept2.jpg"
            width={207}
            height={125}
            alt="fish"
          />
          <Image
            className="absolute right-0 top-8 mr-10"
            src="/concept3.jpg"
            width={145}
            height={100}
            alt="salad"
          />
        </div>
      </section>
    </main>
  );
}
