// components/GalleryEvent.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs";

type GalleryData = {
    [key: string]: string[];
};

const galleryData: GalleryData = {
    allPhotos: [
        "1.webp", "2.webp", "3.webp", "8.webp", "5.webp",
        "6.webp", "7.webp", "4.webp", "9.webp", "10.webp",
        "11.webp", "12.webp", "13.webp", "14.webp", "15.webp",
        "16.webp", "17.webp", "18.webp", "19.webp", "20.webp",
        "21.webp", "22.webp", "23.webp", "24.webp", "25.webp",
        "26.webp", "27.webp", "28.webp", "29.webp", "30.webp",
        "31.webp", "33.webp", "34.webp", "35.webp",
        "36.webp", "37.webp", "38.webp", "39.webp", "40.webp",
        "41.webp", "42.webp", "43.webp", "44.webp", "45.webp",
        "46.webp", "47.webp", "48.webp", "49.webp", "50.webp",
        "51.webp", "52.webp", "53.webp", "54.webp", "55.webp",
        "56.webp", "57.webp", "58.webp", "59.webp", "60.webp",
        "61.webp", "62.webp", "63.webp", "64.webp", "65.webp",
        "66.webp", "67.webp", "69.webp", "70.webp",
        "71.webp", "72.webp", "73.webp", "74.webp", "75.webp",
        "76.webp", "77.webp", "78.webp", "79.webp",
        "81.webp", "82.webp", "83.webp", "84.webp", "85.webp",
        "86.webp", "87.webp", "88.webp", "89.webp", "90.webp",
        "91.webp", "92.webp", "93.webp", "94.webp", "95.webp",
        "96.webp", "97.webp", "98.webp", "99.webp",
        "101.webp", "102.webp", "103.webp", "104.webp", "105.webp", "106.webp", "107.webp", "108.webp", "109.webp",
        "110.webp", "111.webp", "112.webp", "113.webp", "114.webp", "115.webp", "116.webp", "117.webp", "118.webp", "119.webp",
        "120.webp", "121.webp", "122.webp", "123.webp", "124.webp", "125.webp", "126.webp", "127.webp", "128.webp", "129.webp",
        "130.webp", "131.webp", "132.webp", "133.webp", "134.webp", "135.webp", "136.webp", "137.webp", "138.webp", "139.webp",
        "140.webp", "141.webp", "142.webp", "143.webp", "144.webp", "145.webp", "146.webp", "147.webp", "148.webp", "149.webp",
        "150.webp", "151.webp", "152.webp", "153.webp", "154.webp", "155.webp", "156.webp", "157.webp", "158.webp", "159.webp",
        "160.webp", "161.webp", "162.webp", "163.webp", "164.webp", "165.webp", "166.webp", "167.webp", "168.webp", "169.webp",
        "170.webp", "171.webp", "172.webp", "173.webp", "174.webp", "175.webp", "176.webp", "177.webp", "178.webp", "179.webp",
        "180.webp", "181.webp", "182.webp", "183.webp", "184.webp", "185.webp", "186.webp", "187.webp",

    ],
    allDay2: [],
};

export default function GalleryEvent() {
    const [columns, setColumns] = useState<React.ReactNode[][]>([[], [], [], []]);
    const colCount = 4;

    useEffect(() => {
        let imgIndex = 0;
        const colArrays: React.ReactNode[][] = Array.from({ length: colCount }, () => []);

        Object.keys(galleryData).forEach((folder) => {
            galleryData[folder].forEach((imageName) => {
                const imgPath = `/images/gallery-event/${folder}/${imageName}`;

                const imageWrapper = (
                    <div key={`${folder}-${imageName}`} className="image-wrapper relative mb-4">
                        <Image
                            src={imgPath}
                            alt="Gallery Image"
                            width={400}
                            height={400}
                            className="w-100 h-auto rounded shadow-sm"
                            loading="lazy"
                        />
                        <a
                            href={imgPath}
                            download
                            className="download-icon absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md"
                        >
                            <BsDownload className="text-xl text-gray-700" />
                        </a>
                    </div>
                );

                colArrays[imgIndex % colCount].push(imageWrapper);
                imgIndex++;
            });
        });

        setColumns(colArrays);
    }, []);

    return (
        <div className="gallery-complete-page">
            <div className="gallery-event-block">
                <div className="auto-container">
                    <div className="row gallery-images-block">
                        {columns.map((col, i) => (
                            <div
                                key={i}
                                className="col-lg-3 col-md-4 col-sm-4 col-6 each-indiv-images-block"
                            >
                                {col}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { BsDownload } from "react-icons/bs";
// import { galleryData } from "@/data/galleryData"; // ✅ import structured data

// export default function GalleryEvent() {
//     const [columns, setColumns] = useState<React.ReactNode[][]>([[], [], [], []]);
//     const colCount = 4;

//     useEffect(() => {
//         let imgIndex = 0;
//         const colArrays: React.ReactNode[][] = Array.from({ length: colCount }, () => []);

//         // Loop through galleryData
//         Object.entries(galleryData).forEach(([day, categories]) => {
//             if (Array.isArray(categories)) {
//                 // ✅ flat array (like "group-photos")
//                 categories.forEach((imgPath) => {
//                     const imageWrapper = renderImage(imgPath, `${day}-${imgIndex}`);
//                     colArrays[imgIndex % colCount].push(imageWrapper);
//                     imgIndex++;
//                 });
//             } else {
//                 // ✅ nested categories (like day1, day2)
//                 Object.entries(categories).forEach(([category, images]) => {
//                     images.forEach((imgPath, idx) => {
//                         const imageWrapper = renderImage(imgPath, `${day}-${category}-${idx}`);
//                         colArrays[imgIndex % colCount].push(imageWrapper);
//                         imgIndex++;
//                     });
//                 });
//             }
//         });

//         setColumns(colArrays);
//     }, []);

//     // ✅ helper function for image rendering
//     const renderImage = (imgPath: string, key: string) => (
//         <div key={key} className="image-wrapper relative mb-4">
//             <Image
//                 src={imgPath}
//                 alt="Gallery Image"
//                 width={400}
//                 height={400}
//                 className="w-100 h-auto rounded shadow-sm"
//                 loading="lazy"
//             />
//             <a
//                 href={imgPath}
//                 download
//                 className="download-icon absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md"
//             >
//                 <BsDownload className="text-xl text-gray-700" />
//             </a>
//         </div>
//     );

//     return (
//         <div className="gallery-complete-page">
//             <div className="gallery-event-block">
//                 <div className="auto-container">
//                     <div className="row gallery-images-block">
//                         {columns.map((col, i) => (
//                             <div
//                                 key={i}
//                                 className="col-lg-3 col-md-4 col-sm-4 col-6 each-indiv-images-block"
//                             >
//                                 {col}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
