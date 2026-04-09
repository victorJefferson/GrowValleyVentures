import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { TrustGuard } from "trust-guard-js";
import { trustGuardConfig } from "../../trustguard.config";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TrustGuard config={trustGuardConfig}>
      <Navbar />
      <main className="siteWrapper">
        {children}
      </main>
      <Footer />
    </TrustGuard>
  );
}
