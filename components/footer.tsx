export function Footer({ className }: { className?: string }) {
  return (
    <footer className={`mt-auto border-t border-fd-border py-6 px-6 text-center text-sm text-muted-foreground ${className ?? ''}`}>
      &copy; 2026 JavaBee. JavaBee is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" className="text-fd-foreground hover:underline">GNU General Public License v3.0</a>. The JavaBee name and logo are trademarks of JavaBee.
    </footer>
  );
}