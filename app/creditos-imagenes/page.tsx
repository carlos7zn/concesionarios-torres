import Link from 'next/link';

export default function CreditosImagenes() {
  const credits = [
    {
      brand: 'CUPRA Formentor',
      images: [
        { file: '01.webp', commons: '2020 Cupra Formentor VZ2 TSi 4Drive S-A 2.0 Front.jpg', author: 'Vauxford', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2020_Cupra_Formentor_VZ2_TSi_4Drive_S-A_2.0_Front.jpg' },
        { file: '02.webp', commons: '2020 Cupra Formentor VZ2 TSi 4Drive S-A 2.0 Rear.jpg', author: 'Vauxford', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2020_Cupra_Formentor_VZ2_TSi_4Drive_S-A_2.0_Rear.jpg' },
      ]
    },
    {
      brand: 'Tesla Model Y',
      images: [
        { file: '01.jpg', commons: "'20 Tesla Model Y.jpg", author: 'Bull-Doser', license: 'Public domain', url: 'https://commons.wikimedia.org/wiki/File:%2720_Tesla_Model_Y.jpg' },
        { file: '02.jpg', commons: '0 Tesla Model Y 0.jpg', author: 'Benespit', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:0_Tesla_Model_Y_0.jpg' },
        { file: '03.jpg', commons: '0 Tesla Model Y 1.jpg', author: 'Benespit', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:0_Tesla_Model_Y_1.jpg' },
      ]
    },
    {
      brand: 'Audi Q3 Sportback',
      images: [
        { file: '01.jpg', commons: '2019 Audi Q3 Sportback Front.jpg', author: 'Vauxford', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2019_Audi_Q3_Sportback_Front.jpg' },
        { file: '02.jpg', commons: '2019 Audi Q3 Sportback Rear.jpg', author: 'Vauxford', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2019_Audi_Q3_Sportback_Rear.jpg' },
        { file: '03.jpg', commons: 'Audi Q3 Sportback (48779979922).jpg', author: 'Rutger van der Maar', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Audi_Q3_Sportback_(48779979922).jpg' },
      ]
    },
    {
      brand: 'Volkswagen Golf GTI',
      images: [
        { file: '01.jpg', commons: '2020 Volkswagen Golf GTi TSi S-A 2.0 Front.jpg', author: 'John Kalinga', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2020_Volkswagen_Golf_GTi_TSi_S-A_2.0_Front.jpg' },
        { file: '02.jpg', commons: '2020 Volkswagen Golf GTi TSi S-A 2.0 Rear.jpg', author: 'John Kalinga', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2020_Volkswagen_Golf_GTi_TSi_S-A_2.0_Rear.jpg' },
        { file: '03.jpg', commons: '2022 Volkswagen Golf GTI in Oryx White Pearl, Front Left.jpg', author: 'Elise240SX', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2022_Volkswagen_Golf_GTI_in_Oryx_White_Pearl,_Front_Left,_04-24-2022.jpg' },
      ]
    },
    {
      brand: 'Toyota RAV4',
      images: [
        { file: '01.jpg', commons: '2019 Toyota RAV4 XLE AWD front red 3.20.19.jpg', author: 'Kevauto', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2019_Toyota_RAV4_XLE_AWD_front_red_3.20.19.jpg' },
        { file: '02.jpg', commons: '2019 Toyota RAV4 XLE AWD rear (2) 3.22.19.jpg', author: 'Kevauto', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2019_Toyota_RAV4_XLE_AWD_rear_(2)_3.22.19.jpg' },
        { file: '03.jpg', commons: '2019 Toyota RAV4 LE front 3.27.19.jpg', author: 'Kevauto', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2019_Toyota_RAV4_LE_front_3.27.19.jpg' },
      ]
    },
    {
      brand: 'BMW Serie 3 Touring (G21)',
      images: [
        { file: '01.jpg', commons: 'BMW 3-Series (G21, front).jpg', author: 'Jason Lawrence', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:BMW_3-Series_(G21,_front).jpg' },
        { file: '02.jpg', commons: 'BMW 3-Series (G21, rear).jpg', author: 'Jason Lawrence', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:BMW_3-Series_(G21,_rear).jpg' },
        { file: '03.jpg', commons: 'BMW 3 SERIES TOURING (G21) HONG KONG.jpg', author: 'Dinkun Chen', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:BMW_3_SERIES_TOURING_(G21)_HONG_KONG.jpg' },
      ]
    },
    {
      brand: 'Mercedes-Benz Clase A (W177)',
      images: [
        { file: '01.jpg', commons: 'Mercedes-Benz A 200 (W177, 2020) (54708611955).jpg', author: 'Charles from Port Chester, New York', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Mercedes-Benz_A_200_(W177,_2020)_(54708611955).jpg' },
        { file: '02.jpg', commons: 'Mercedes-Benz A 200 (W177, 2020) (54733793681).jpg', author: 'Charles from Port Chester, New York', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Mercedes-Benz_A_200_(W177,_2020)_(54733793681).jpg' },
        { file: '03.jpg', commons: 'Mercedes-Benz A 180 (W177, 2023) (54813754079).jpg', author: 'Charles from Port Chester, New York', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Mercedes-Benz_A_180_(W177,_2023)_(54813754079).jpg' },
      ]
    },
    {
      brand: 'Hyundai Tucson (NX4)',
      images: [
        { file: '01.jpg', commons: '2021 Hyundai Tucson Elite N-Line front.jpg', author: 'LuvsMG481', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2021_Hyundai_Tucson_Elite_N-Line_front.jpg' },
        { file: '02.jpg', commons: '2021 Hyundai Tucson Elite N-Line front (1).jpg', author: 'LuvsMG481', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2021_Hyundai_Tucson_Elite_N-Line_front_(1).jpg' },
        { file: '03.jpg', commons: '2022 Hyundai Tucson Preferred, Front Right, 05-24-2021.jpg', author: 'SsmIntrigue', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:2022_Hyundai_Tucson_Preferred,_Front_Right,_05-24-2021.jpg' },
      ]
    },
  ];

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-8">Créditos de Imágenes</h1>
      <p className="text-gray-400 mb-8 max-w-2xl">
        Todas las imágenes de vehículos provienen de <a href="https://commons.wikimedia.org/" target="_blank" rel="noopener noreferrer" className="text-brand-red underline">Wikimedia Commons</a> 
        y se usan bajo sus respectivas licencias Creative Commons o dominio público.
      </p>
      
      <div className="space-y-12">
        {credits.map((vehicle, idx) => (
          <div key={idx} className="bg-dark-900 border border-dark-800 p-6 rounded-lg">
            <h2 className="text-xl font-display font-bold text-white mb-4">{vehicle.brand}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-dark-800">
                    <th className="p-2 text-left">Archivo</th>
                    <th className="p-2 text-left">Nombre en Commons</th>
                    <th className="p-2 text-left">Autor</th>
                    <th className="p-2 text-left">Licencia</th>
                    <th className="p-2 text-left">URL Original</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicle.images.map((img, i) => (
                    <tr key={i} className="border-b border-dark-800/50">
                      <td className="p-2">{img.file}</td>
                      <td className="p-2">{img.commons}</td>
                      <td className="p-2">{img.author}</td>
                      <td className="p-2">{img.license}</td>
                      <td className="p-2">
                        <a href={img.url} target="_blank" rel="noopener noreferrer" className="text-brand-red underline">Ver en Commons</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
