import { lazy, Suspense } from "react";
import NavBar from "@/components/landing/NavBar";
import Hero from "@/components/landing/Hero";

const Sources = lazy(() => import("@/components/landing/Sources"));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks"));
const Templates = lazy(() => import("@/components/landing/Templates"));
const AppTour = lazy(() => import("@/components/landing/AppTour"));
const Testimonials = lazy(() => import("@/components/landing/Testimonials"));
const Faq = lazy(() => import("@/components/landing/Faq"));
const FinalCta = lazy(() => import("@/components/landing/FinalCta"));
const Footer = lazy(() => import("@/components/landing/Footer"));

/** Reserva de altura enquanto a próxima seção carrega. */
const Hold = ({ light }: { light?: boolean }) => (
  <div className={light ? "h-72 bg-white" : "h-72 bg-paper"} />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-paper">
      <NavBar />

      <main>
        <Hero />

        <Suspense fallback={<Hold />}>
          <Sources />
        </Suspense>

        <Suspense fallback={<Hold light />}>
          <HowItWorks />
        </Suspense>

        <Suspense fallback={<Hold />}>
          <Templates />
        </Suspense>

        <Suspense fallback={<Hold light />}>
          <AppTour />
        </Suspense>

        <Suspense fallback={<Hold />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<Hold light />}>
          <Faq />
        </Suspense>

        <Suspense fallback={<Hold />}>
          <FinalCta />
        </Suspense>
      </main>

      <Suspense fallback={<Hold light />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
