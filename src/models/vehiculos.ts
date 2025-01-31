// vehiculos.ts
export interface Vehiculos {
  title: string;
  price: string;
  category: 'cars' | 'bikes';
  image: string;
  description: string;
}

export const vehiculos: Vehiculos[] = [
  // Coches
  {
    title: 'Toyota Camry',
    price: '25000',
    category: 'cars',
    image: 'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/mlp/short-gallery/CAM_MY25_0006_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024',
    description: 'Sedán confiable y espacioso, ideal para familias.',
  },
  {
    title: 'Yamaha R1',
    price: '15000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/kNUyxg5UZNwbANGXClRfrSjwskNmCirRfu7Ui5gCVQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMveWFtYWhh/L3lhbWFoYS15emYt/cjEvc291cmNlL3lh/bWFoYS15emYtcjE2/NmVjMTY1YTljZjRk/LmpwZz9pbXdpZHRo/PTg4MA',
    description: 'Moto deportiva de alto rendimiento para los amantes de la velocidad.',
  },
  {
    title: 'Honda Civic',
    price: '22000',
    category: 'cars',
    image: 'https://media.ed.edmunds-media.com/honda/civic/2025/oem/2025_honda_civic_sedan_si_fq_oem_2_1280x855.jpg',
    description: 'Coche compacto y deportivo, perfecto para la ciudad.',
  },
  {
    title: 'Ducati Monster',
    price: '12000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/UQElZtI8Y37ULlvh82s0mBfOY80i_pQixO0_EBa9-TQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMvZHVjYXRp/L21vbnN0ZXIvc291/cmNlL21vbnN0ZXI2/NWY1MzdhY2U1MTNh/LmpwZz9pbXdpZHRo/PTg4MA',
   description: 'Moto naked ágil y potente, ideal para la ciudad y carretera.',
  },
  {
    title: 'Ford Mustang',
    price: '35000',
    category: 'cars',
    image: 'https://imgs.search.brave.com/nCkXts6D-RvRkR5jfPM7yLCXnWRjbcL38Pn6lrFecxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2QxLzIw/MThfRm9yZF9NdXN0/YW5nX0dUXzUuMC5q/cGcvNTEycHgtMjAx/OF9Gb3JkX011c3Rh/bmdfR1RfNS4wLmpw/Zw',
   description: 'Coche deportivo icónico con potente motor V8.',
  },
  {
    title: 'BMW R 1250 GS',
    price: '18000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/W7dJHqqQNCkwc_Zqon0SG3IHN-AX4_WGWMNYiyjY2HQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbW1k/YXRhLmRldi5waXhl/bG1vdGlvbmRlbW8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEyL1N0dWRp/by1JbWFnZS0xOS5q/cGc',
   description: 'Moto adventure versátil y cómoda para viajes largos.',
  },
  {
    title: 'Tesla Model 3',
    price: '40000',
    category: 'cars',
    image: 'https://imgs.search.brave.com/ivzPUbehNhr8VGp-R8VdFgqLZP7lCUYnvZI6IN6ar00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LXRlc2xhLW1vZGVs/LTMtZnJvbnQtdGhy/ZWUtcXVhcnRlcnMt/NjU5ZWJhYWYwMDVm/Yi5qcGc_Y3JvcD0w/LjUzM3h3OjAuNzA5/eGg7MC4yNDF4dyww/LjEyNHhoJnJlc2l6/ZT02NDA6Kg',
   description: 'Coche eléctrico de alta tecnología con gran autonomía.',
  },
  {
    title: 'Harley-Davidson Sportster',
    price: '10000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/XhJegQKi6j-U_L9pHoNXT3b376wHKcoc80jo0whKVyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMvaGFybGV5/LWRhdmlkc29uL2N1/c3RvbS0xMjUwL3Nv/dXJjZS9jdXN0b20t/MTI1MDY2NjQzNzY5/MDMyZDkuanBnP2lt/d2lkdGg9ODgw',
   description: 'Moto icónica con estilo clásico y potente motor.',
  },
  {
    title: 'Toyota Camry',
    price: '25000',
    category: 'cars',
    image: 'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/mlp/short-gallery/CAM_MY25_0006_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024',
    description: 'Sedán confiable y espacioso, ideal para familias.',
  },
  {
    title: 'Yamaha R1',
    price: '15000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/kNUyxg5UZNwbANGXClRfrSjwskNmCirRfu7Ui5gCVQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMveWFtYWhh/L3lhbWFoYS15emYt/cjEvc291cmNlL3lh/bWFoYS15emYtcjE2/NmVjMTY1YTljZjRk/LmpwZz9pbXdpZHRo/PTg4MA',
    description: 'Moto deportiva de alto rendimiento para los amantes de la velocidad.',
  },
  {
    title: 'Honda Civic',
    price: '22000',
    category: 'cars',
    image: 'https://media.ed.edmunds-media.com/honda/civic/2025/oem/2025_honda_civic_sedan_si_fq_oem_2_1280x855.jpg',
    description: 'Coche compacto y deportivo, perfecto para la ciudad.',
  },
  {
    title: 'Ducati Monster',
    price: '12000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/UQElZtI8Y37ULlvh82s0mBfOY80i_pQixO0_EBa9-TQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMvZHVjYXRp/L21vbnN0ZXIvc291/cmNlL21vbnN0ZXI2/NWY1MzdhY2U1MTNh/LmpwZz9pbXdpZHRo/PTg4MA',
   description: 'Moto naked ágil y potente, ideal para la ciudad y carretera.',
  },
  {
    title: 'Ford Mustang',
    price: '35000',
    category: 'cars',
    image: 'https://imgs.search.brave.com/nCkXts6D-RvRkR5jfPM7yLCXnWRjbcL38Pn6lrFecxE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2QxLzIw/MThfRm9yZF9NdXN0/YW5nX0dUXzUuMC5q/cGcvNTEycHgtMjAx/OF9Gb3JkX011c3Rh/bmdfR1RfNS4wLmpw/Zw',
   description: 'Coche deportivo icónico con potente motor V8.',
  },
  {
    title: 'BMW R 1250 GS',
    price: '18000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/W7dJHqqQNCkwc_Zqon0SG3IHN-AX4_WGWMNYiyjY2HQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbW1k/YXRhLmRldi5waXhl/bG1vdGlvbmRlbW8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEyL1N0dWRp/by1JbWFnZS0xOS5q/cGc',
   description: 'Moto adventure versátil y cómoda para viajes largos.',
  },
  {
    title: 'Tesla Model 3',
    price: '40000',
    category: 'cars',
    image: 'https://imgs.search.brave.com/ivzPUbehNhr8VGp-R8VdFgqLZP7lCUYnvZI6IN6ar00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy8yMDI0/LXRlc2xhLW1vZGVs/LTMtZnJvbnQtdGhy/ZWUtcXVhcnRlcnMt/NjU5ZWJhYWYwMDVm/Yi5qcGc_Y3JvcD0w/LjUzM3h3OjAuNzA5/eGg7MC4yNDF4dyww/LjEyNHhoJnJlc2l6/ZT02NDA6Kg',
   description: 'Coche eléctrico de alta tecnología con gran autonomía.',
  },
  {
    title: 'Harley-Davidson Sportster',
    price: '10000',
    category: 'bikes',
    image: 'https://imgs.search.brave.com/XhJegQKi6j-U_L9pHoNXT3b376wHKcoc80jo0whKVyA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YmlrZWRla2hvLmNv/bS9wcm9jZXNzZWRp/bWFnZXMvaGFybGV5/LWRhdmlkc29uL2N1/c3RvbS0xMjUwL3Nv/dXJjZS9jdXN0b20t/MTI1MDY2NjQzNzY5/MDMyZDkuanBnP2lt/d2lkdGg9ODgw',
   description: 'Moto icónica con estilo clásico y potente motor.',
  },
];