import { lazy, Suspense } from "react";
import SSHeader from "@/components/socialsquare/SSHeader";
import SSHeroSection from "@/components/socialsquare/SSHeroSection";
import BlueCursorGlow from "@/components/socialsquare/BlueCursorGlow";

const SSCanvasShowcase = lazy(() => import("@/components/socialsquare/SSCanvasShowcase"));
const SSCarouselShowcase = lazy(() => import("@/components/socialsquare/SSCarouselShowcase"));
const SSComparisonSection = lazy(() => import("@/components/socialsquare/SSComparisonSection"));
const SSProblemSection = lazy(() => import("@/components/socialsquare/SSProblemSection"));
const SSOriginSection = lazy(() => import("@/components/socialsquare/SSOriginSection"));
const SSHowItWorksSection = lazy(() => import("@/components/socialsquare/SSHowItWorksSection"));
const SSWorkflowSection = lazy(() => import("@/components/socialsquare/SSWorkflowSection"));
const SSFeaturesSection = lazy(() => import("@/components/socialsquare/SSFeaturesSection"));
const SSTestimonialsSection = lazy(() => import("@/components/socialsquare/SSTestimonialsSection"));
const SSFAQSection = lazy(() => import("@/components/socialsquare/SSFAQSection"));
const SSFinalCTA = lazy(() => import("@/components/socialsquare/SSFinalCTA"));
const SSFooter = lazy(() => import("@/components/socialsquare/SSFooter"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-5 h-5 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <BlueCursorGlow />
      <SSHeader />
      <SSHeroSection />
      <Suspense fallback={<LoadingFallback />}><SSCanvasShowcase /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSCarouselShowcase /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSComparisonSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSProblemSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSOriginSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSHowItWorksSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSWorkflowSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSFeaturesSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSTestimonialsSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSFAQSection /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSFinalCTA /></Suspense>
      <Suspense fallback={<LoadingFallback />}><SSFooter /></Suspense>
    </div>
  );
};

export default Index;
