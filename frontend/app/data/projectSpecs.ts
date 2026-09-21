/**
 * Metadata and specs for notable valuation projects
 */
export interface ProjectMeta {
  scale?: string
  location?: string
  purpose?: string
  method?: string
  assetType?: string
  client?: string
  badge?: string
  highlight?: string
}

export const PROJECT_SPECS: Record<string, ProjectMeta> = {
  'eco-green-riverside-city': {
    scale: '120 ha khu đô thị sinh thái',
    location: 'Quận 7, TP. Hồ Chí Minh',
    purpose: 'Phát hành trái phiếu & tài trợ vốn',
    method: 'Phương pháp Thặng dư & Chiết khấu dòng tiền (DCF)',
    assetType: 'Đại đô thị phức hợp sinh thái ven sông',
    client: 'Tập đoàn Xuân Mai & Các đối tác tài chính',
    badge: '120 Ha • Nam Sài Gòn',
    highlight: 'Tổ hợp thương mại, căn hộ cao cấp và công viên sinh thái 22 ha quy mô lớn tại Nam Sài Gòn.'
  },
  'nha-may-dong-tau-shipyard': {
    scale: '7 ha nhà máy ven sông',
    location: 'Cảng Cát Lái, TP. Hồ Chí Minh',
    purpose: 'Thế chấp hạn mức tín dụng HSBC',
    method: 'Phương pháp Chi phí & So sánh thị trường',
    assetType: 'Hệ thống máy móc, thiết bị và phương tiện đóng tàu',
    client: 'HSBC Bank & Nhà máy đóng tàu Shipyard',
    badge: 'Quy mô 7 Ha • Cát Lái',
    highlight: 'Hệ thống thiết bị siêu trường siêu trọng đạt tiêu chuẩn quốc tế nghiêm ngặt từ HSBC.'
  },
  'du-an-dong-tang-long': {
    scale: '159.36 ha quy hoạch đồng bộ',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    purpose: 'Chuyển nhượng & tài trợ phát triển',
    method: 'Phương pháp Thặng dư & So sánh trực tiếp',
    assetType: 'Khu đô thị phức hợp sinh thái',
    client: 'HUD (Tổng Công ty Đầu tư Phát triển Nhà và Đô thị)',
    badge: '159.36 Ha • TP. Thủ Đức',
    highlight: 'Bốn mặt tiếp giáp Vành Đai 3, Nguyễn Duy Trinh, Lã Xuân Oai với hồ điều hòa 19 ha.'
  },
  'van-phuc-reverside': {
    scale: '198 ha bán đảo sông Sài Gòn',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    purpose: 'Thẩm định đầu tư & thế chấp vay vốn',
    method: 'Phương pháp Thặng dư, Chiết khấu dòng tiền (DCF)',
    assetType: 'Đại đô thị ven sông tích hợp công viên giải trí',
    client: 'Tập đoàn Vạn Phúc (Van Phuc Group)',
    badge: '198 Ha • Bán Đảo Sông Sài Gòn',
    highlight: '3 mặt giáp sông Sài Gòn dài 3.4km, một trong những bán đảo đô thị đẹp nhất Đông Nam Á.'
  },
  'day-chuyen-san-xuat-van-mdf': {
    scale: '6.5 ha nhà máy công nghiệp',
    location: 'Huyện Đắk Song, Đắk Nông',
    purpose: 'Huy động vốn đầu tư công nghiệp',
    method: 'Phương pháp Chi phí thay thế & So sánh giá quốc tế',
    assetType: 'Dây chuyền sản xuất ván MDF công nghệ tiên tiến',
    client: 'Nhà máy chế biến gỗ MDF Long Việt',
    badge: '6.5 Ha • Đắk Nông',
    highlight: 'Dự án công nghiệp trọng điểm Tây Nguyên với năng lực chế biến gỗ rừng trồng quy mô lớn.'
  },
  'la-veranda-resort': {
    scale: 'Resort boutique ven biển tiêu chuẩn 5 sao',
    location: 'Đảo Phú Quốc, Kiên Giang',
    purpose: 'Thẩm định giá trị M&A nghỉ dưỡng',
    method: 'Phương pháp Thu nhập (DCF) kết hợp Chi phí',
    assetType: 'Khu nghỉ dưỡng phong cách Đông Dương (Indochine) thuộc MGallery',
    client: 'Công ty Liên doanh TNHH Khu du lịch Veranda & AccorHotels',
    badge: 'Boutique 5 Sao • Phú Quốc',
    highlight: 'Khu nghỉ dưỡng phong cách biệt thự Pháp cổ điển bên bờ biển trực thuộc Accor MGallery.'
  },
  'gia-tri-doanh-nghiep-cong-ty-co-phan-dau-tu-phat-trien-khong-gian-ngam': {
    scale: 'Tổ hợp không gian ngầm đa chức năng',
    location: 'Quận 1, TP. Hồ Chí Minh',
    purpose: 'Xác định giá trị chuyển nhượng M&A',
    method: 'Phương pháp Tài sản & Hiện tại hóa dòng tiền',
    assetType: 'Dự án trung tâm thương mại và bãi đỗ xe ngầm',
    client: 'Công ty CP Đầu tư - Phát triển Không gian Ngầm (IUS)',
    badge: 'M&A Doanh nghiệp • Quận 1',
    highlight: 'Dự án tiên phong khai phá hạ tầng ngầm đô thị hiện đại ngay tại lõi trung tâm Sài Gòn.'
  },
  'day-chuyen-san-xuat-bot-mi': {
    scale: 'Công suất 1.000 tấn / 24 giờ & Cầu cảng chuyên dụng',
    location: 'KCN Cái Mép, Bà Rịa - Vũng Tàu',
    purpose: 'Thẩm định dây chuyền công nghệ cao',
    method: 'Phương pháp Chi phí & Tham chiếu báo giá từ hãng sản xuất EU',
    assetType: 'Dây chuyền bột mì Buhler, Toledo & Cầu cảng bốc dỡ nước sâu',
    client: 'Tập đoàn InterFlour (InterFlour Việt Nam)',
    badge: '1.000 Tấn/Ngày • Cái Mép',
    highlight: 'Dây chuyền nhập khẩu trọn bộ Thụy Sĩ/Đức kết hợp hệ thống cầu cảng nhậm xuất hàng hải.'
  },
  'day-chuyen-san-xuat-xi-mang-mo-khoang-san': {
    scale: '2 dây chuyền - 3.6 triệu tấn/năm & Tổ hợp mỏ đá',
    location: 'Tỉnh Hải Dương',
    purpose: 'Định giá dây chuyền & mỏ khoáng sản',
    method: 'Phương pháp Thu nhập (mỏ khoáng sản) & Chi phí (dây chuyền Đức/TQ)',
    assetType: 'Dây chuyền luyện clinker, xi măng và mỏ đá vôi nguyên liệu',
    client: 'Công ty Xi măng Phúc Sơn',
    badge: '3.6 Triệu Tấn/Năm • Hải Dương',
    highlight: 'Tổ hợp công nghiệp nặng trị giá hàng ngàn tỷ đồng với quy mô khai thác mỏ dài hạn.'
  }
}

export function getProjectSpecs(slug?: string): ProjectMeta {
  if (!slug) return {}
  if (PROJECT_SPECS[slug]) return PROJECT_SPECS[slug]
  
  // Normalize slug by stripping trailing timestamp or numeric suffix like -1789523838002
  const cleanSlug = slug.replace(/(?:-\d{8,}|-\d+)$/, '')
  if (PROJECT_SPECS[cleanSlug]) return PROJECT_SPECS[cleanSlug]

  // Prefix match
  const foundKey = Object.keys(PROJECT_SPECS).find(key => slug.startsWith(key) || cleanSlug.startsWith(key))
  if (foundKey) return PROJECT_SPECS[foundKey]

  return {}
}
