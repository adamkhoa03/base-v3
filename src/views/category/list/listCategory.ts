const headers = [
  { title: 'Thương hiệu', align: 'start', key: 'brand', maxWidth: '20%', sortable: true },
  { title: 'Mô tả', align: 'start', key: 'description', sortable: true },
  { title: 'Thao tác', align: 'end', key: 'action', sortable: false }
] as const; // Readonly
const phones = [
  {
    brand: 'Apple',
    description: 'Hãng điện thoại cao cấp, nổi bật với iPhone và hệ sinh thái iOS.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Samsung',
    description: 'Thương hiệu Hàn Quốc với dòng Galaxy đa dạng từ phổ thông đến cao cấp.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Xiaomi',
    description: 'Nhà sản xuất Trung Quốc, nổi bật với cấu hình mạnh và giá rẻ.',
    action: ['delete', 'edit']
  },
  { brand: 'Oppo', description: 'Chuyên về điện thoại chụp ảnh đẹp, thiết kế thời trang.', action: ['delete', 'edit'] },
  { brand: 'Vivo', description: 'Thương hiệu tập trung vào công nghệ camera và âm thanh.', action: ['delete', 'edit'] },
  {
    brand: 'OnePlus',
    description: 'Hãng smartphone cao cấp với hiệu năng mạnh mẽ và OxygenOS.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Realme',
    description: 'Thương hiệu con của Oppo, hướng đến phân khúc giá rẻ và trung cấp.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Sony',
    description: 'Hãng Nhật Bản nổi tiếng với dòng Xperia và công nghệ màn hình cao cấp.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Google',
    description: 'Nhà sản xuất Pixel với trải nghiệm Android thuần khiết.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Asus',
    description: 'Chuyên điện thoại gaming như ROG Phone với hiệu năng mạnh.',
    action: ['delete', 'edit']
  }
];

export { headers, phones };
