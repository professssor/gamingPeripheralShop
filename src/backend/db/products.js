import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // CPUs
  {
    id: uuid(),
    name: "Intel Core i7-11700K",
    price: 399.99,
    core_count: 8,
    thread_count: 16,
    clock_speed: "3.6 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A4P0S211027CF251.jpg",
    category: "CPU",
    new: true,
  },
  {
    id: uuid(),
    name: "AMD Ryzen 9 5900X",
    price: 549.99,
    core_count: 12,
    thread_count: 24,
    clock_speed: "3.7 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/B1MBS2111150RD4B785.jpg",
    category: "CPU",
  },
  {
    id: uuid(),
    name: "Intel Core i5-11600K",
    price: 279.99,
    core_count: 6,
    thread_count: 12,
    clock_speed: "3.9 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A4P0S211028AB28F.jpg",
    category: "CPU",
  },
  {
    id: uuid(),
    name: "AMD Ryzen 7 5800X",
    price: 399.99,
    core_count: 8,
    thread_count: 16,
    clock_speed: "3.8 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/A24GS2103191AFR1.jpg",
    category: "CPU",
  },
  {
    id: uuid(),
    name: "Intel Core i9-11900K",
    price: 649.99,
    core_count: 8,
    thread_count: 16,
    clock_speed: "3.5 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-231-03.jpg",
    category: "CPU",
    new: true,
  },
  {
    id: uuid(),
    name: "AMD Ryzen 5 5600X",
    price: 269.99,
    core_count: 6,
    thread_count: 12,
    clock_speed: "3.7 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-769-02.jpg",
    category: "CPU",
  },
  {
    id: uuid(),
    name: "Intel Core i7-10700K",
    price: 349.99,
    core_count: 8,
    thread_count: 16,
    clock_speed: "3.8 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/19-118-123-V03.jpg",
    category: "CPU",
  },
  // {
  //   id: uuid(),
  //   name: "AMD Ryzen 9 5950X",
  //   price: 799.99,
  //   core_count: 16,
  //   thread_count: 32,
  //   clock_speed: "3.4 GHz",
  //   image: "cpu_ryzen_9_5950x.jpg",
  //   category: "CPU",
  // },
  // {
  //   id: uuid(),
  //   name: "Intel Core i9-10900K",
  //   price: 529.99,
  //   core_count: 10,
  //   thread_count: 20,
  //   clock_speed: "3.7 GHz",
  //   image: "cpu_i9_10900k.jpg",
  //   category: "CPU",
  // },
  {
    id: uuid(),
    name: "AMD Ryzen 7 5800H",
    price: 399.99,
    core_count: 8,
    thread_count: 16,
    clock_speed: "3.2 GHz",
    image:
      "https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-770-02.jpg",
    category: "CPU",
  },

  // GPUs
  {
    id: uuid(),
    name: "NVIDIA GeForce RTX 3080",
    price: 799.99,
    memory: "10 GB",
    core_clock: "1.71 GHz",
    boost_clock: "1.71 GHz",
    image: "https://m.media-amazon.com/images/I/81UBILsWwiS._SL1500_.jpg",
    category: "GPU",
    new: true,
  },
  {
    id: uuid(),
    name: "AMD Radeon RX 6800 XT",
    price: 649.99,
    memory: "16 GB",
    core_clock: "2.25 GHz",
    boost_clock: "2.25 GHz",
    image: "https://m.media-amazon.com/images/I/81c3PiQLBUL._SX679_.jpg",
    category: "GPU",
  },
  {
    id: uuid(),
    name: "NVIDIA GeForce RTX 3090",
    price: 1499.99,
    memory: "24 GB",
    core_clock: "1.4 GHz",
    boost_clock: "1.7 GHz",
    image: "https://m.media-amazon.com/images/I/81q6ZBQFsHL._SX679_.jpg",
    category: "GPU",
  },
  {
    id: uuid(),
    name: "AMD Radeon RX 6900 XT",
    price: 999.99,
    memory: "16 GB",
    core_clock: "2.25 GHz",
    boost_clock: "2.25 GHz",
    image: "https://m.media-amazon.com/images/I/812Gs+u9OAL._SX569_.jpg",
    category: "GPU",
  },
  {
    id: uuid(),
    name: "NVIDIA GeForce RTX 3070",
    price: 499.99,
    memory: "8 GB",
    core_clock: "1.5 GHz",
    boost_clock: "1.73 GHz",
    image: "https://m.media-amazon.com/images/I/81DOtdsS1sL._SX679_.jpg",
    category: "GPU",
  },
  {
    id: uuid(),
    name: "AMD Radeon RX 6700 XT",
    price: 479.99,
    memory: "12 GB",
    core_clock: "2.32 GHz",
    boost_clock: "2.32 GHz",
    image: "https://m.media-amazon.com/images/I/81t7Ga7nyxS._SX569_.jpg",
    category: "GPU",
    new: true,
  },
  {
    id: uuid(),
    name: "NVIDIA GeForce RTX 3060",
    price: 329.99,
    memory: "12 GB",
    core_clock: "1.32 GHz",
    boost_clock: "1.78 GHz",
    image: "https://m.media-amazon.com/images/I/71OFKtclW4L._SX679_.jpg",
    category: "GPU",
  },
  {
    id: uuid(),
    name: "AMD Radeon RX 6600 XT",
    price: 349.99,
    memory: "8 GB",
    core_clock: "1.27 GHz",
    boost_clock: "2.19 GHz",
    image: "https://m.media-amazon.com/images/I/813YnK6DdrL._SL1500_.jpg",
    category: "GPU",
  },
  {
    id: uuid(),
    name: "NVIDIA GeForce RTX 3050 Ti",
    price: 249.99,
    memory: "4 GB",
    core_clock: "1.32 GHz",
    boost_clock: "1.79 GHz",
    image: "https://m.media-amazon.com/images/I/51UNUjJIlRL._SL1422_.jpg",
    category: "GPU",
    new: true,
  },
  {
    id: uuid(),
    name: "AMD Radeon RX 6500 XT",
    price: 229.99,
    memory: "4 GB",
    core_clock: "1.47 GHz",
    boost_clock: "1.94 GHz",
    image: "https://m.media-amazon.com/images/I/61ivvErlHOL._SX569_.jpg",
    category: "GPU",
  },

  // RAM
  {
    id: uuid(),
    name: "Corsair Vengeance RGB Pro",
    price: 149.99,
    capacity: "16 GB",
    speed: "3200 MHz",
    image: "https://m.media-amazon.com/images/I/71YOsuICFSL._SX569_.jpg",
    category: "RAM",
    new: true,
  },
  {
    id: uuid(),
    name: "G.Skill Trident Z RGB",
    price: 139.99,
    capacity: "16 GB",
    speed: "3600 MHz",
    image: "https://m.media-amazon.com/images/I/61l4EStxhnL._SX679_.jpg",
    category: "RAM",
  },
  {
    id: uuid(),
    name: "Crucial Ballistix RGB",
    price: 129.99,
    capacity: "16 GB",
    speed: "3000 MHz",
    image: "https://m.media-amazon.com/images/I/51Ba-HDhVvL._SX679_.jpg",
    category: "RAM",
    new: true,
  },
  {
    id: uuid(),
    name: "Kingston HyperX Fury",
    price: 119.99,
    capacity: "16 GB",
    speed: "2666 MHz",
    image: "https://m.media-amazon.com/images/I/61Udx3CqBtL._SX569_.jpg",
    category: "RAM",
  },
  {
    id: uuid(),
    name: "Corsair Dominator Platinum RGB",
    price: 199.99,
    capacity: "32 GB",
    speed: "3200 MHz",
    image: "https://m.media-amazon.com/images/I/71RmrJA2ZXL._SX679_.jpg",
    category: "RAM",
  },

  {
    id: uuid(),
    name: "Crucial Ballistix",
    price: 99.99,
    capacity: "16 GB",
    speed: "2400 MHz",
    image: "https://m.media-amazon.com/images/I/51V3WQnH77L._SL1024_.jpg",
    category: "RAM",
  },

  {
    id: uuid(),
    name: "Corsair Vengeance LPX",
    price: 89.99,
    capacity: "16 GB",
    speed: "2666 MHz",
    image: "https://m.media-amazon.com/images/I/51tPG4QE-LL._SX679_.jpg",
    category: "RAM",
  },
  {
    id: uuid(),
    name: "G.Skill Aegis",
    price: 79.99,
    capacity: "8 GB",
    speed: "2400 MHz",
    image: "https://m.media-amazon.com/images/I/51iyg8sarcL._SX569_.jpg",
    category: "RAM",
  },

  // Cabinets
  {
    id: uuid(),
    name: "NZXT H710i",
    price: 199.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/51otxdsxJZL._SX679_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "Corsair Obsidian 500D",
    price: 179.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/61Py+-IAroL._SL1200_.jpg",
    category: "Cabinet",
    new: true,
  },
  {
    id: uuid(),
    name: "Cooler Master MasterCase H500M",
    price: 169.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/81a8AWjxHvL._SX569_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "Fractal Design Meshify C",
    price: 89.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/8153KhUtBEL._SL1500_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "Phanteks Eclipse P400A",
    price: 79.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/71e5k8fO9kL._SL1111_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "NZXT H510",
    price: 69.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/510MJkoIe5L._SX679_.jpg",
    category: "Cabinet",
    new: true,
  },
  {
    id: uuid(),
    name: "Corsair Carbide Series 275R",
    price: 59.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/51DZYVh5-lS._SX679_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "Cooler Master MasterBox Q300L",
    price: 49.99,
    type: "Mini Tower",
    image:
      "https://m.media-amazon.com/images/I/51WfytAtGCL._SX300_SY300_QL70_FMwebp_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "Fractal Design Focus G",
    price: 39.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/71XuK1GAiSL._SY879_.jpg",
    category: "Cabinet",
  },
  {
    id: uuid(),
    name: "Phanteks P300",
    price: 39.99,
    type: "Mid Tower",
    image: "https://m.media-amazon.com/images/I/91Gqz3yTwnL._SX569_.jpg",
    category: "Cabinet",
  },

  {
    id: uuid(),
    name: "Acer Predator X27",
    price: 1999.99,
    display_size: "27 inches",
    resolution: "3840x2160",
    refresh_rate: "144 Hz",
    image:
      "https://static-ecapac.acer.com/media/catalog/product/n/i/nitro-monitor-qg1-series-qg271-qg241y-qg221q-nitroentrywp-01_3_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500",
    category: "Monitor",
    new: true,
  },

  {
    id: uuid(),
    name: "ASUS ROG Swift PG279QZ",
    price: 699.99,
    display_size: "27 inches",
    resolution: "2560x1440",
    refresh_rate: "165 Hz",
    image: "https://m.media-amazon.com/images/I/8163ztTThNL._SX679_.jpg",
    category: "Monitor",
  },

  {
    id: uuid(),
    name: "Samsung 980 PRO NVMe M.2 SSD",
    price: 199.99,
    capacity: "1 TB",
    interface: "NVMe PCIe 4.0 x4",
    image: "ssd_samsung_980_pro_1tb.jpg",
    category: "Storage",

    new: true,
  },
  {
    id: uuid(),
    name: "Western Digital Black SN850 NVMe M.2 SSD",
    price: 299.99,
    capacity: "2 TB",
    interface: "NVMe PCIe 4.0 x4",
    image: "ssd_wd_black_sn850_2tb.jpg",
    category: "Storage",
  },
  // PSU

  {
    id: uuid(),
    name: "EVGA SuperNOVA 750 G5",
    price: 129.99,
    image: "https://m.media-amazon.com/images/I/71PlbhFTnrL._SX679_.jpg",
    category: "PSU",
  },
  {
    id: uuid(),
    name: "Corsair RM750x",
    price: 139.99,
    image: "https://m.media-amazon.com/images/I/71vXweqjv+L._SL1500_.jpg",
    category: "PSU",
    new: true,
  },
  {
    id: uuid(),
    name: "Seasonic Focus GX-750",
    price: 139.99,
    image: "https://m.media-amazon.com/images/I/81gBxvbxnQL._SL1500_.jpg",
    category: "PSU",
  },
];
