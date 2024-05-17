import Link from "next/link";

export default function HomePage() {
  
  const mockUrls = [
    "https://utfs.io/f/c19283f0-548d-48a8-af4e-e6c1cba3662e-hru0oc.png",
    "https://utfs.io/f/3b3ce9ac-97a1-4b68-864d-08ea1017f96a-6yp18p.png",
    "https://utfs.io/f/d31a9b67-1f93-4007-913a-faa0c1aa50c0-74f1pt.png",
    "https://utfs.io/f/374b1d70-09f7-4290-9a18-23f153ffd57b-n3j07k.png",
    "https://utfs.io/f/9ffe54b9-5c3d-4d3e-97ff-4426bab9e485-w11kfa.png",
    "https://utfs.io/f/39cdf897-5135-4f21-b03d-fce423ed9f27-5jr7zm.png"
  ]
  
  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url
  }))
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
