import Image from 'next/image';

const PeechanzGiftPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* ヒーローセクション */}
      <section className="text-center bg-green-50 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-green-800 mb-4">疲れが取れない…そんな日々を、スッキリ変える“整え習慣”を。</h1>
        <p className="text-2xl font-semibold text-green-700 mb-6">＼ 朝がつらいあなたに ／</p>
        <p className="text-3xl font-extrabold text-yellow-600 mb-8">“スッキリ目覚めて、一日中シャキッ！”</p>
        <p className="text-xl text-gray-700">
          にんにくとたまごの恵みを、ぎゅっとひと粒に。～ことのはファームの元気玉～
        </p>
        <p className="text-xl font-bold text-green-800 mt-4">ぴーちゃんズの贈り物</p>
        <div className="relative w-full max-w-md h-80 mx-auto mt-8">
          <Image
            src="/images/genkidama/genkidama.jpg"
            alt="ことのはファームの元気玉"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* 商品概要と初回限定価格 */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">『特製にんにく卵黄』</h2>
        <p className="text-2xl font-semibold text-gray-700 line-through">通常価格3,480円</p>
        <p className="text-4xl font-extrabold text-red-600 mb-6">今すぐお試し。初回限定1,500円</p>
        <p className="text-2xl font-bold text-red-700 mb-4">【数量限定】</p>
        <p className="text-lg text-gray-700 mb-2">材料に限りがあるため、お申し込みが一定数に達し次第、新規募集を停止いたします。</p>
        <p className="text-lg text-gray-700">(60粒入り・送料込み)</p>
        <div className="text-center mt-8">
          <a
            href="https://buy.stripe.com/7sI8yo1Dp4on4us00Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            今すぐ購入する
          </a>
          <p className="text-sm text-gray-600 mt-2">プロモーションコード: <span className="font-bold text-green-700">P-EGG</span></p>
        </div>
      </section>

      {/* 開発秘話 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6">自分たちの不調から生まれた、“本当に飲みたかった”にんにく卵黄</h2>
        <p className="text-lg text-gray-700 mb-4">
          朝起きても疲れが取れない。日中の集中力が落ちてきた。そんな自分に「何か足りてない気がする…」と感じていた時、自家製のにんにくと、ぴーちゃんズのたまごで試しに作った“にんにく卵黄”。
        </p>
        <p className="text-lg text-gray-700 mb-4">
          すると、翌朝から<span className="font-bold text-green-700">スッキリ目覚める感覚が！</span>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          自分たちが実感した“変化”を、今度はあなたに届けたい。そんな想いから生まれたのが、この<span className="font-bold text-green-700">「元気玉」</span>です。
        </p>
        <div className="relative w-full max-w-md h-64 mx-auto mt-8">
          <Image
            src="/images/genkidama/yosshis.jpeg"
            alt="よっしーと女将"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://buy.stripe.com/7sI8yo1Dp4on4us00Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            今すぐ購入する
          </a>
          <p className="text-sm text-gray-600 mt-2">プロモーションコード: <span className="font-bold text-green-700">P-EGG</span></p>
        </div>
      </section>

      {/* 材料へのこだわり */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">材料は、すべて“うちの子たち”から。</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">【たまご】</h3>
            <p className="text-lg text-gray-700">元気に庭を走り回ってるぴーちゃんズの元気なたまごを使用</p>
            <p className="text-lg text-gray-700 mt-2">赤玉に加えて、アローカナの特別な『幸せの青いたまご』</p>
            <p className="text-lg text-gray-700">→ 栄養価が高く、ビタミンEや鉄分が豊富な希少たまご</p>
            <div className="relative w-full h-48 mt-4">
              <Image src="/images/genkidama/egg.jpg" alt="ぴーちゃんズのたまご" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">【にんにく】</h3>
            <p className="text-lg text-gray-700">無農薬・自家栽培 → 土作りからこだわった畑で育てた、力強い香りと味わい</p>
            <p className="text-xl font-bold text-green-800 mt-2">元気の源『ことのはファームのにんにく』</p>
            <div className="relative w-full h-48 mt-4">
              <Image src="/images/genkidama/garlic.jpg" alt="ことのはファームのにんにく" layout="fill" objectFit="contain" className="rounded-lg" />
            </div>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-8 text-center">
          添加物は一切使わず、丁寧に手作り。私たちが毎日飲んでるものとまったく同じものを、お届けします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/genkidama/itameru.jpg" alt="手作り工程1" layout="fill" objectFit="contain" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/genkidama/past.jpg" alt="手作り工程2" layout="fill" objectFit="contain" />
            </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          ※収穫・在庫状況により購入したにんにくを使用することもあります。
        </p>
        <div className="text-center mt-8">
          <a
            href="https://buy.stripe.com/7sI8yo1Dp4on4us00Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            今すぐ購入する
          </a>
          <p className="text-sm text-gray-600 mt-2">プロモーションコード: <span className="font-bold text-green-700">P-EGG</span></p>
        </div>
      </section>

      {/* 体験談 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6">作った本人が、一番驚いた！</h2>
        <p className="text-lg text-gray-700 mb-4">
          正直、最初は半信半疑でした。でも、飲みはじめてすぐに、朝の目覚めが“ガラッ”と変わったんです。
        </p>
        <p className="text-lg text-gray-700 mb-4">
          日中もエネルギーが持続して、春先特有の鼻のむずむずや涙もやわらいだ感覚がありました。
        </p>
        <p className="text-lg text-gray-700">
          毎日忙しいあなたにも、ぜひ体感して、あなたも“元気な毎日”を始めてください。
        </p>
        <div className="text-center mt-8">
          <a
            href="https://buy.stripe.com/7sI8yo1Dp4on4us00Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            今すぐ購入する
          </a>
          <p className="text-sm text-gray-600 mt-2">プロモーションコード: <span className="font-bold text-green-700">P-EGG</span></p>
        </div>
      </section>

      {/* 飲み方 */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">1日2粒で、手軽に毎日の“整え時間”を。</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>朝1粒、夜1粒がおすすめ → 夜飲むと目覚めすっきり、朝飲むと日中の気力が充実！</li>
          <li>そのまま水やぬるま湯、お茶で飲むだけ → 料理不要、続けやすい！</li>
          <li>1袋で約1ヶ月分（1日2粒×30日）</li>
        </ul>
        <div className="text-center mt-8">
          <a
            href="https://buy.stripe.com/7sI8yo1Dp4on4us00Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            今すぐ購入する
          </a>
          <p className="text-sm text-gray-600 mt-2">プロモーションコード: <span className="font-bold text-green-700">P-EGG</span></p>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">よくある質問</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-green-700">Q：においは気になりますか？</h3>
            <p className="text-lg text-gray-700">→ 加熱しているので、生にんにくのような強いにおいはありません。噛むと多少気になりますが、噛まずに水で飲み込むとほとんど気になりません。</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700">Q：妊娠中や授乳中でも飲めますか？</h3>
            <p className="text-lg text-gray-700">→ 原材料は卵黄とにんにくのみですが、ご心配な方は医師にご相談ください。</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700">Q：飲み忘れた日はどうすれば？</h3>
            <p className="text-lg text-gray-700">→ 飲み忘れた日は無理にまとめて飲まず、翌日からふだん通りのペースでOKです♪</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-700">Q：途中でお休みできますか？</h3>
            <p className="text-lg text-gray-700">→ 定期便はいつでもストップ可能。ご希望のタイミングで再開もOKです。</p>
          </div>
        </div>
      </section>

      {/* コース選択 */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">あなたにぴったりの“整え習慣”を、2つのコースから選べます♪</h2>
        <div className="relative w-full max-w-md h-64 mx-auto mb-8">
          <Image
            src="/images/genkidama/pack.jpg"
            alt="にんにく卵黄パッケージ"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="py-3 px-4 border-b text-left"></th>
                <th className="py-3 px-4 border-b text-left text-xl font-bold">朝晩スッキリ実感コース</th>
                <th className="py-3 px-4 border-b text-left text-xl font-bold">ゆるっと健康習慣コース</th>
              </tr>
              <tr className="bg-green-100 text-green-800">
                <th className="py-3 px-4 border-b text-left"></th>
                <th className="py-3 px-4 border-b text-left">60粒入り／1ヶ月分</th>
                <th className="py-3 px-4 border-b text-left">30粒入り／1ヶ月分</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">飲む量</td>
                <td className="py-3 px-4 border-b">1日2粒（朝1粒＋夜1粒）</td>
                <td className="py-3 px-4 border-b">1日1粒（朝または夜）</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">初月限定価格</td>
                <td className="py-3 px-4 border-b">1,500円（税・送料込み）</td>
                <td className="py-3 px-4 border-b">1,000円（税・送料込み）</td>
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">通常価格<br/>（2ヶ月目以降）</td>
                <td className="py-3 px-4 border-b">3,480円（税・送料込み）</td>
                <td className="py-3 px-4 border-b">2,980円（税・送料込み）</td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://buy.stripe.com/7sI8yo1Dp4on4us00Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
          >
            今すぐ購入する
          </a>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="text-center max-w-4xl mx-auto py-8"> {/* パディング調整 */}
        <h2 className="text-4xl font-bold text-green-800 mb-6">お問い合わせ</h2>
        <p className="text-lg text-gray-700 mb-8">
          にんにく卵黄に関するお問い合わせは、LINE公式アカウントよりお気軽にご連絡ください。
        </p>
        <a
          href="https://lin.ee/n652Uqp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg"
        >
          LINEで問い合わせる
        </a>
      </section>

    </div>
  );
};

export default PeechanzGiftPage;