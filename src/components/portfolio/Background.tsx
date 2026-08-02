import { lazy, Suspense } from "react";
import { ClientOnly } from "@/components/ClientOnly";
import { ParticleField } from "./ParticleField";

const Scene3D = lazy(() => import("./Scene3D"));

export function Hero3D() {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
    </ClientOnly>
  );
}

/** Fixed cinematic background: gradient blobs + grid + interactive particles. */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div
        className="animate-blob absolute -left-32 top-[-10%] h-[46rem] w-[46rem] rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.22 265), transparent 65%)" }}
      />
      <div
        className="animate-blob absolute -right-40 top-[20%] h-[40rem] w-[40rem] rounded-full opacity-35 blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.58 0.24 310), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-blob absolute bottom-[-20%] left-[30%] h-[34rem] w-[34rem] rounded-full opacity-25 blur-[130px]"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.15 195), transparent 65%)",
          animationDelay: "-12s",
        }}
      />
      <div className="absolute inset-0 opacity-70">
        <ClientOnly>
          <ParticleField />
        </ClientOnly>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 30%, oklch(0.14 0.03 275 / 85%) 100%)",
        }}
      />
    </div>
  );
}
