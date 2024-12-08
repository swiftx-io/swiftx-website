import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Transforming ideas into powerful software solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Custom Development</li>
              <li className="text-sm text-muted-foreground">Cloud Solutions</li>
              <li className="text-sm text-muted-foreground">Mobile Apps</li>
              <li className="text-sm text-muted-foreground">Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">About Us</li>
              <li className="text-sm text-muted-foreground">Careers</li>
              <li className="text-sm text-muted-foreground">Blog</li>
              <li className="text-sm text-muted-foreground">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Privacy Policy</li>
              <li className="text-sm text-muted-foreground">Terms of Service</li>
              <li className="text-sm text-muted-foreground">Cookie Policy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SwiftX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
