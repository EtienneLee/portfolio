"use client";
import { usePathname, useRouter } from "next/navigation";

export default function WorkLink() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#work");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "0.95rem",
      }}
    >
      work
    </button>
  );
}
