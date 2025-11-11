import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Zpire 2026
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The future of AI-assisted software development starts here.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alibaba Cloud</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tongyi Lingma</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alibaba Cloud. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
