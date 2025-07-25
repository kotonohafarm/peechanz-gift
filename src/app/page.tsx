
'use client';

import Image from 'next/image';
import { client, urlFor } from '../../sanity.config';
import { groq } from 'next-sanity';
import { useState, useEffect } from 'react';
import { PurchaseButton } from '../components/PurchaseButton'; // 購入ボタンコンポーネントをインポート

// Sanityからデータをフェッチするクエリ
const query = groq`
  *[_type == "garlicEggYolkPage"][0]{
    heroSection {
      mainTitle,
      subTitle1,
      subTitle2,
      description,
      giftText,
      mainImage,
    },
    productOverviewSection {
      productName,
      regularPrice,
      trialPrice,
      quantityInfo,
      limitedQuantityText,
      limitedQuantityReason,
      promoCode,
    },
    storySection {
      storyTitle,
      storyContent,
      storyImage,
    },
    ingredientsSection {
      ingredientsTitle,
      eggSection {
        eggDescription,
        eggImage,
      },
      garlicSection {
        garlicDescription,
        garlicImage,
      },
      handmadeText,
      handmadeImages,
      noteText,
    },
    testimonialSection {
      testimonialTitle,
      testimonialContent,
    },
    howToUseSection {
      howToUseTitle,
      howToUseItems,
    },
    faqSection {
      faqTitle,
      faqs[] {
        question,
        answer,
      },
    },
    pricingSection {
      pricingTitle,
      packImage,
      courses[] {
        name,
        quantity,
        dailyDose,
        trialPrice,
        regularPrice,
        benefits,
        purchaseUrl,
      },
    },
    contactSection {
      contactTitle,
      contactDescription,
      contactLinkText,
      contactLinkUrl,
    },
  }
`;

export default function PeechanzGiftPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await client.fetch(query);
        setData(fetchedData);
      } catch (err) {
        console.error("Failed to fetch data from Sanity:", err);
        setError("コンテンツの読み込みに失敗しました。");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-700">コンテンツを読み込み中...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-lg text-red-600">{error}</div>;
  }

  if (!data) {
    return <div className="text-center py-20 text-lg text-gray-700">コンテンツがありません。Sanity Studioでコンテンツを入力してください。</div>;
  }

  // お試しコースのURLを取得（存在しない場合に備えてオプショナルチェイニングを使用）
  const trialCourse = data.pricingSection?.courses?.find((c: any) => c.name.includes('お試し'));
  const trialCourseUrl = trialCourse?.purchaseUrl;
  const promoCode = data.productOverviewSection?.promoCode || "P-EGG"; // Sanityから取得、なければデフォルト値

  // コース選択セクションから「お試しコース」を除外
  const filteredCourses = data.pricingSection?.courses?.filter((c: any) => !c.name.includes('お試し')) || [];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* ヒーローセクション */}
      <section className="relative text-center bg-green-50 p-8 rounded-lg shadow-md">
        <div className="absolute top-4 left-4 logo-container">
          <Image
            src="/images/rogo/kotonohafarm-rogo.png"
            alt="左上のロゴ"
            layout="fill"
            className="logo-image"
          />
        </div>
        <div className="absolute top-4 right-4 logo-container">
          <Image
            src="/images/rogo/kodawari-rogo.png"
            alt="右上のロゴ"
            layout="fill"
            className="logo-image"
          />
        </div>
        <h1 className="text-4xl font-bold text-green-800 mb-4">{data.heroSection.mainTitle}</h1>
        <p className="text-2xl font-semibold text-green-700 mb-6">{data.heroSection.subTitle1}</p>
        <p className="text-3xl font-extrabold text-yellow-600 mb-8">{data.heroSection.subTitle2}</p>
        <p className="text-xl text-gray-700">
          {data.heroSection.description}
        </p>
        <p className="text-xl font-bold text-green-800 mt-4">{data.heroSection.giftText}</p>
        {data.heroSection.mainImage && (
          <div className="relative w-full max-w-md h-80 mx-auto mt-8">
            <Image
              src={urlFor(data.heroSection.mainImage).url()}
              alt={data.heroSection.mainTitle}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <PurchaseButton promoCode={promoCode} purchaseUrl={trialCourseUrl} />
      </section>

      {/* 商品概要と初回限定価格 */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">{data.productOverviewSection.productName}</h2>
        <p className="text-2xl font-semibold text-gray-700 line-through">通常価格{data.productOverviewSection.regularPrice}円</p>
        <p className="text-4xl font-extrabold text-red-600 mb-6">今すぐお試し。初回限定{data.productOverviewSection.trialPrice}円</p>
        <p className="text-lg text-gray-700">{data.productOverviewSection.quantityInfo}</p>
        <p className="text-2xl font-bold text-red-700 mb-4">{data.productOverviewSection.limitedQuantityText}</p>
        <p className="text-lg text-gray-700 mb-2">{data.productOverviewSection.limitedQuantityReason}</p>
        <PurchaseButton promoCode={promoCode} purchaseUrl={trialCourseUrl} />
      </section>

      {/* 開発秘話 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6">{data.storySection.storyTitle}</h2>
        {data.storySection.storyContent.map((block: any, index: number) => (
          <p key={index} className="text-lg text-gray-700 mb-4">
            {block.children[0].text}
          </p>
        ))}
        {data.storySection.storyImage && (
          <div className="relative w-full max-w-md h-64 mx-auto mt-8">
            <Image
              src={urlFor(data.storySection.storyImage).url()}
              alt={data.storySection.storyTitle}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <PurchaseButton promoCode={promoCode} purchaseUrl={trialCourseUrl} />
      </section>

      {/* 材料へのこだわり */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{data.ingredientsSection.ingredientsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">【たまご】</h3>
            {data.ingredientsSection.eggSection.eggDescription.map((block: any, index: number) => (
              <p key={index} className="text-lg text-gray-700">
                {block.children[0].text}
              </p>
            ))}
            {data.ingredientsSection.eggSection.eggImage && (
              <div className="relative w-full h-48 mt-4">
                <Image src={urlFor(data.ingredientsSection.eggSection.eggImage).url()} alt="ぴーちゃんズのたまご" layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">【にんにく】</h3>
            {data.ingredientsSection.garlicSection.garlicDescription.map((block: any, index: number) => (
              <p key={index} className="text-lg text-gray-700">
                {block.children[0].text}
              </p>
            ))}
            {data.ingredientsSection.garlicSection.garlicImage && (
              <div className="relative w-full h-48 mt-4">
                <Image src={urlFor(data.ingredientsSection.garlicSection.garlicImage).url()} alt="ことのはファームのにんにく" layout="fill" objectFit="contain" className="rounded-lg" />
              </div>
            )}
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-8 text-center">
          {data.ingredientsSection.handmadeText}
        </p>
        {data.ingredientsSection.handmadeImages && data.ingredientsSection.handmadeImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {data.ingredientsSection.handmadeImages.map((image: any, index: number) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image src={urlFor(image).url()} alt={`手作り工程${index + 1}`} layout="fill" objectFit="contain" />
              </div>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-500 mt-2 text-center">
          {data.ingredientsSection.noteText}
        </p>
        <PurchaseButton promoCode={promoCode} purchaseUrl={trialCourseUrl} />
      </section>

      {/* 体験談 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6">{data.testimonialSection.testimonialTitle}</h2>
        {data.testimonialSection.testimonialContent.map((block: any, index: number) => (
          <p key={index} className="text-lg text-gray-700 mb-4">
            {block.children[0].text}
          </p>
        ))}
      </section>

      {/* 飲み方 */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{data.howToUseSection.howToUseTitle}</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {data.howToUseSection.howToUseItems.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* よくある質問 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{data.faqSection.faqTitle}</h2>
        <div className="space-y-4">
          {data.faqSection.faqs.map((faq: any, index: number) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-green-700">{faq.question}</h3>
              {faq.answer.map((block: any, blockIndex: number) => (
                <p key={blockIndex} className="text-lg text-gray-700">{block.children[0].text}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* コース選択 */}
      <section className="bg-green-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">{data.pricingSection.pricingTitle}</h2>
        {data.pricingSection.packImage && (
          <div className="relative w-full max-w-md h-64 mx-auto mb-8">
            <Image
              src={urlFor(data.pricingSection.packImage).url()}
              alt="にんにく卵黄パッケージ"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <div className="overflow-x-auto hidden sm:block">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-green-100 text-green-800">
                <th className="py-3 px-4 border-b text-left"></th>
                {filteredCourses.map((course: any, index: number) => (
                  <th key={index} className="py-3 px-4 border-b text-left text-xl font-bold">{course.name}</th>
                ))}
              </tr>
              <tr className="bg-green-100 text-green-800">
                <th className="py-3 px-4 border-b text-left"></th>
                {filteredCourses.map((course: any, index: number) => (
                  <th key={index} className="py-3 px-4 border-b text-left">{course.quantity}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">飲む量</td>
                {filteredCourses.map((course: any, index: number) => (
                  <td key={index} className="py-3 px-4 border-b">{course.dailyDose}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">初月限定価格</td>
                {filteredCourses.map((course: any, index: number) => (
                  <td key={index} className="py-3 px-4 border-b">{course.trialPrice}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">通常価格<br/>（2ヶ月目以降）</td>
                {filteredCourses.map((course: any, index: number) => (
                  <td key={index} className="py-3 px-4 border-b">{course.regularPrice}</td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4 border-b font-semibold">購入</td>
                {filteredCourses.map((course: any, index: number) => (
                  <td key={index} className="py-3 px-4 border-b">
                    <a
                      href={course.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-yellow-500 text-white text-lg font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg"
                    >
                      購入する
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile view for courses */}
        <div className="sm:hidden space-y-6">
          {filteredCourses.map((course: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">{course.name}</h3>
              <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">数量:</span> {course.quantity}</p>
              <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">飲む量:</span> {course.dailyDose}</p>
              <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">初月限定価格:</span> {course.trialPrice}</p>
              <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">通常価格（2ヶ月目以降）:</span> {course.regularPrice}</p>
              <a
                href={course.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-white text-lg font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300 shadow-lg w-full text-center"
              >
                購入する
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="text-center max-w-4xl mx-auto py-8">
        <h2 className="text-4xl font-bold text-green-800 mb-6">{data.contactSection.contactTitle}</h2>
        <p className="text-lg text-gray-700 mb-8">
          {data.contactSection.contactDescription}
        </p>
        <a
          href={data.contactSection.contactLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-lg"
        >
          {data.contactSection.contactLinkText}
        </a>
      </section>

    </div>
  );
}
