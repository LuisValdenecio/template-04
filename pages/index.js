import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      {
        process.env.NEXT_PUBLIC_LOGO_SECTION_SHOW === "1" && (
          <LogoGrid />
        )
      }
      <GradientWrapper>
        {
          process.env.NEXT_PUBLIC_FEATURES_SECTION_SHOW === "1" && (
            <Features />
          )
        }
        {
          process.env.NEXT_PUBLIC_CTA_SHOW === "1" && (
            <CTA />
          )
        }
      {
        process.env.NEXT_PUBLIC_FEATURE_GRID_SHOW === "1" && (
          <ToolKit />
        )
      }
      </GradientWrapper>

      {
        process.env.NEXT_PUBLIC_TESTIMONIAL_SHOW === "1" && (
          <GradientWrapper>
            <Testimonials />
          </GradientWrapper>
        )
      }
      {
        process.env.NEXT_PUBLIC_FOOTER_CTA_SHOW === "1" && (
          <FooterCTA />
        )
      }
    </>
  );
}
