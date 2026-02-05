import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import BootLoader from "@/components/BootLoader";
import LandingPage from "@/components/LandingPage";
import RegistrationModal from "@/components/RegistrationModal";
import RecruitmentSection from "@/components/RecruitmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleBootComplete = useCallback(() => {
    setIsBooting(false);
  }, []);

  const handleOpenRegistration = useCallback(() => {
    setIsRegistrationOpen(true);
  }, []);

  const handleCloseRegistration = useCallback(() => {
    setIsRegistrationOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isRegistrationOpen) {
        handleCloseRegistration();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isRegistrationOpen, handleCloseRegistration]);

  return (
    <div className="bg-background min-h-screen">
      <div className="scanline-overlay" />
      <div className="noise-overlay" />

      {/* Boot Loader */}
      <AnimatePresence mode="wait">
        {isBooting && <BootLoader onComplete={handleBootComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      {!isBooting && (
        <main className="flex flex-col w-full relative">
          <LandingPage
            onScrollToRecruitment={() => {
              const element = document.getElementById("recruitment-section");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            isBlurred={isRegistrationOpen}
          />
          <RecruitmentSection onOpenRegistration={handleOpenRegistration} />
          <Footer />
        </main>
      )}

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={handleCloseRegistration}
      />
    </div>
  );
};

export default Index;
