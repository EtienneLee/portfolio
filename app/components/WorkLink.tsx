"use client";
export default function WorkLink() {
  const handleClick = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
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
