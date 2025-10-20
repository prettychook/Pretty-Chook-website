```tsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Features } from "./components/Features";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { AnimatedChook, useChookIdleAnimation } from "./components/AnimatedChook";

/**
Pretty Chook Website
Commercial short-term lending business
 */
export default function PrettyChook() {
  const { idleTrigger, resetIdleTrigger } = useChookIdleAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Idle animation chook */}
      <AnimatedChook trigger={idleTrigger} onComplete={resetIdleTrigger} />
    </div>
  );
}
```