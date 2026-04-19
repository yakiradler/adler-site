export default function TestImages() {
  const imgs = [
    "/product/img1.png",
    "/product/img2.jpg",
    "/product/img3.jpg",
    "/product/img4.avif",
    "/product/img5.jpg",
    "/product/img6.webp",
    "/product/img7.webp",
  ];
  return (
    <div style={{ background: "#111", padding: 20 }}>
      <h1 style={{ color: "white", marginBottom: 20 }}>Image Test</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {imgs.map((src, i) => (
          <div key={src} style={{ border: "1px solid #444", padding: 8 }}>
            <p style={{ color: "#aaa", marginBottom: 8 }}>img{i + 1} — {src.split(".").pop()?.toUpperCase()}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`img${i + 1}`} style={{ width: "100%", height: 300, objectFit: "contain", background: "#222" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
