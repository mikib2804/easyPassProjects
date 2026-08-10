import { CodeXml } from "lucide-react";
import Image from "next/image";
export function Logo() {
  return (
    <a href="#home" className="logo" aria-label="EasyPassProjects home">
      <Image
        src="/easyPassProjects_noText.png"
        alt="EasyPassProjects logo"
        width={40}
        height={40}
      />

      <span>
        EasyPass<span>Projects</span>
      </span>
    </a>
  );
}
