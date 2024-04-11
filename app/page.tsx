import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { RainboWBg, RainbowText } from '@/components/Rainbow'
import Image from 'next/image'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import {
  Experience,
  experienceAmazon,
  experienceDreambits,
  experienceFamalabs,
  experienceFree,
  experienceSmartBear,
} from '@/components/Experience'
import CustomLink, { TextLink } from '@/components/Link'
import { recognitionUsc } from '@/components/Recognition'

export default async function Page() {
  const intro = (
    <div className="flex h-full h-screen w-full flex-col items-center justify-center space-y-1 text-center">
      <div className="mb-6 aspect-square w-full max-w-48 rounded-full">
        <div
          className="h-full w-full rounded-full bg-cover bg-center p-4"
          style={{
            backgroundImage: `url(/static/images/me/me_2023_05_final_square.jpg)`,
          }}
        >
          {/* <img
            src="/static/images/me/me_2023_05_final_square.jpg"
            className="h-full w-full rounded-full"
          /> */}
        </div>
      </div>
      <div className="mb-4 text-2xl font-semibold">
        Hey
        <span className="mx-1 inline-block origin-[70%_70%] animate-hey">👋</span> I'm{' '}
        <RainbowText>Tommaso Romano'</RainbowText>
      </div>
      <div className="text-lg font-semibold">a software engineer from Milan, Italy 🇮🇹</div>
      {/* <div className="text-md mb-4 font-semibold opacity-75">
          A dynamic team and engaging challenges that ignite my passion every day. I'm always
          looking for new opportunities to learn and grow.
        </div> */}
      <div className="flex space-x-4 pt-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
      </div>
    </div>
  )
  return (
    <>
      {intro}
      <div className="mb-4 text-2xl font-bold">Experience</div>
      <div className="flex w-full flex-col space-y-12">
        {experienceAmazon}
        {experienceFamalabs}
        {experienceDreambits}
        {experienceSmartBear}
        {experienceFree}
      </div>
      {/* <div className="mb-4 mt-20 text-2xl font-bold">Recognitions</div>
      <div className="flex w-full flex-col space-y-12">{recognitionUsc}</div> */}
    </>
  )
}
